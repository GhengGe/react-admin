import { useCallback, useEffect, useMemo, useState } from 'react'
import {
    FilterValue,
    SorterResult,
    TablePaginationConfig,
    TableProps
} from 'antd/es/table/interface'

import useSpin from '../spin/useSpin'

import type { UseTableOptions, UseTableReturn } from './type'

export function useTable<T extends object>(options: UseTableOptions<T>): UseTableReturn<T> {
    const {
        request,
        pageCurrent = 1,
        PageSize = 10,
        initialFilters = {},
        initialSorter,
        autoLoad = true,
        pagination = true
    } = options

    // 状态管理
    const [dataSource, setDataSource] = useState<T[]>([])
    const [total, setTotal] = useState<number>(0)
    const [current, setCurrent] = useState<number>(pageCurrent)
    const [pageSize, setPageSize] = useState<number>(PageSize)
    const [filters, setFilters] = useState<Record<string, FilterValue | null>>(initialFilters)
    const [sorter, setSorter] = useState<SorterResult<T> | SorterResult<T>[] | undefined>(
        initialSorter
    )

    // 使用 useSpin 管理加载状态
    const { showSpin, hideSpin, spinState } = useSpin()

    // 加载数据函数
    const loadData = useCallback(async () => {
        showSpin('加载数据中...')

        try {
            const params = {
                current,
                pageSize,
                filters,
                sorter: Array.isArray(sorter) ? sorter : sorter ? [sorter] : undefined
            }

            const { data, total: totalCount } = await request(params)

            setDataSource(data)
            setTotal(totalCount)
            hideSpin()
        } catch (error) {
            console.error('加载表格数据失败:', error)
            hideSpin()
        }
    }, [current, pageSize, filters, sorter, request, showSpin, hideSpin])

    // 自动加载数据
    useEffect(() => {
        if (autoLoad) {
            loadData()
        }
    }, [autoLoad, loadData])

    // 刷新数据
    const refresh = useCallback(() => {
        loadData()
    }, [loadData])

    // 重置筛选条件
    const resetFilters = useCallback(() => {
        setFilters(initialFilters)
    }, [initialFilters])

    // 重置排序
    const resetSorter = useCallback(() => {
        setSorter(initialSorter)
    }, [initialSorter])

    // 处理表格变化事件
    const handleTableChange = useCallback<TableProps<T>['onChange']>(
        (pagination, filters, sorter) => {
            if (pagination.current !== undefined) {
                setCurrent(pagination.current)
            }

            if (pagination.pageSize !== undefined) {
                setPageSize(pagination.pageSize)
                setCurrent(1) // 当每页条数改变时，重置到第一页
            }

            setFilters(filters)

            // 处理排序
            if (Array.isArray(sorter)) {
                setSorter(sorter.filter((s) => s.column))
            } else if (sorter.column) {
                setSorter(sorter)
            } else {
                setSorter(undefined)
            }
        },
        []
    )

    // 组装表格属性
    const tableProps = useMemo<TableProps<T>>(
        () => ({
            dataSource,
            loading: spinState.spinning,
            pagination: pagination
                ? {
                      current,
                      pageSize,
                      total,
                      showSizeChanger: true,
                      showQuickJumper: true,
                      pageSizeOptions: ['10', '20', '50', '100'],
                      showTotal: (total: number | string) => `共 ${total} 条记录`
                  }
                : false,
            onChange: handleTableChange
        }),
        [dataSource, spinState.spinning, current, pageSize, total, handleTableChange]
    )

    return {
        dataSource,
        loading: spinState.spinning,
        pagination: tableProps.pagination as TablePaginationConfig,
        filters,
        sorter,
        tableProps,
        refresh,
        resetFilters,
        resetSorter,
        setFilters,
        setSorter
    }
}
