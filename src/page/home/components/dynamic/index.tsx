import React, { useEffect, useState } from 'react'
import { Avatar, Button, List, Skeleton } from 'antd'

import './index.less'

import { getVisitorList } from '/@/api/visitor/index'

interface DataType {
    gender?: string
    name: {
        title?: string
        first?: string
        last?: string
    }
    email?: string
    picture: {
        large?: string
        medium?: string
        thumbnail?: string
    }
    nat?: string
    loading: boolean
}

const count = 10

const Index: React.FC = () => {
    const [initLoading, setInitLoading] = useState(true)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<DataType[]>([])
    const [list, setList] = useState<DataType[]>([])

    const fetchData = async (data: DataType[] = []) => {
        const result = await getVisitorList({
            pageNum: 1,
            pageSize: 10
        })
        setInitLoading(false)
        const newData = data.concat(result.list)
        setData(newData)
        setList(newData)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const onLoadMore = async () => {
        setLoading(true)
        setList(
            data.concat([...new Array(count)].map(() => ({ loading: true, name: {}, picture: {} })))
        )
        await fetchData(data)
        setLoading(false)
        window.dispatchEvent(new Event('resize'))
    }

    const loadMore =
        !initLoading && !loading ? (
            <div
                style={{
                    textAlign: 'center',
                    marginTop: 12,
                    height: 32,
                    lineHeight: '32px'
                }}
            >
                <Button onClick={onLoadMore}>loading more</Button>
            </div>
        ) : null

    return (
        <div className="dynamic">
            <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={list}
                renderItem={(item) => (
                    <List.Item actions={[<a key="list-loadmore-view">查看详情</a>]}>
                        <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta
                                avatar={<Avatar src={item.picture.large} />}
                                title={<span>{item.name?.last}</span>}
                                description="一分钟前更新动态"
                            />
                        </Skeleton>
                    </List.Item>
                )}
            />
        </div>
    )
}

export default Index
