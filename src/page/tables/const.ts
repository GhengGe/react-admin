import type { ColumnsType, TabsProps } from 'antd'

import type { DataType } from './type'

export const Columns: ColumnsType<DataType> = [
    {
        title: 'id',
        dataIndex: 'id'
    },
    {
        title: '名称',
        dataIndex: 'name'
    },
    {
        title: '年龄',
        dataIndex: 'age'
    },
    {
        title: '电话',
        dataIndex: 'phone'
    },
    {
        title: '邮箱',
        dataIndex: 'email'
    },
    {
        title: '地址',
        dataIndex: 'address'
    }
]

export const tabItems: TabsProps['items'] = [
    {
        key: '1',
        label: '简单表格'
    },
    {
        key: '2',
        label: '表格空状态'
    }
]
