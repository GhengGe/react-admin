import {
    FilterValue,
    SorterResult,
    TablePaginationConfig,
    TableProps
} from 'antd/es/table/interface'

// 表格请求函数类型
export type FetchDataFn<T> = (params: {
    current: number
    pageSize: number
    filters?: Record<string, FilterValue | null>
    sorter?: SorterResult<T> | SorterResult<T>[]
}) => Promise<{
    data: T[]
    total: number
}>

// useTable 配置选项
export type UseTableOptions<T> = {
    request: FetchDataFn<T>
    pageCurrent?: number
    PageSize?: number
    initialFilters?: Record<string, FilterValue | null>
    initialSorter?: SorterResult<T> | SorterResult<T>[]
    autoLoad?: boolean
    pagination?: boolean
}

// useTable 返回值
export type UseTableReturn<T> = {
    dataSource: T[]
    loading: boolean
    pagination: TablePaginationConfig
    filters: Record<string, FilterValue | null>
    sorter: SorterResult<T> | SorterResult<T>[] | undefined
    tableProps: TableProps<T>
    refresh: () => void
    resetFilters: () => void
    resetSorter: () => void
    setFilters: (filters: Record<string, FilterValue | null>) => void
    setSorter: (sorter: SorterResult<T> | SorterResult<T>[] | undefined) => void
}
