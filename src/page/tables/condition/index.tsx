import { Button, Empty, Table, Tabs } from 'antd'

import { Columns, tabItems } from '../const'
import { useState } from 'react'

import { getTableList } from '/@/api/table/index'
import Tables from '/@/components/Tables'
import { useTable } from '/@/hooks/table/useTable'

export default function Index() {
    const [defaultActiveKey, setDefaultActiveKey] = useState('1')
    const { tableProps, dataSource, refresh } = useTable({
        request: getTableList
    })
    const onChange = (key: string) => {
        console.log(key)
        setDefaultActiveKey(key)
    }

    return (
        <div className="card">
            表格的不同使用方法
            <Tabs defaultActiveKey={defaultActiveKey} items={tabItems} onChange={onChange} />
            {defaultActiveKey === '1' ? (
                <Tables
                    {...tableProps}
                    title={() => <Button onClick={refresh}>refresh</Button>}
                    columns={Columns}
                    dataSource={dataSource}
                />
            ) : (
                <Table
                    {...tableProps}
                    columns={Columns}
                    dataSource={[]}
                    pagination={false}
                    locale={{ emptyText: <Empty description="No Data">自定义空状态</Empty> }}
                />
            )}
        </div>
    )
}
