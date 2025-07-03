import React, { useState } from 'react'
import { DeleteOutlined, PlusOutlined, ReloadOutlined } from '@ant-design/icons'
import { Button } from 'antd'

import { Columns } from '../const'

import Forms from '/@/components/Forms'
import Tables from '/@/components/Tables'
import Upload from '/@/components/Upload'
import { getTableList } from '/@/api/table/index'
import { useTable } from '/@/hooks/table/useTable'
import { querylConfig } from '/@/page/forms/common/data'

export default function Index() {
    const { tableProps, dataSource, refresh } = useTable({
        request: getTableList
    })
    const onSearch = (values: any) => {
        console.warn('Received values of form: ', values)
    }

    const formConfig = {
        submit: onSearch,
        isShowAdvanced: true,
        formsColumn: querylConfig
    }
    const [isOpen, setIsOpen] = useState(false)
    const showModal = () => {
        setIsOpen(!isOpen)
    }
    const toggleModal = (value: boolean, fileList: any) => {
        setIsOpen(value)
        console.warn('文件内容', fileList)
    }
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.warn('selectedRowKeys changed: ', newSelectedRowKeys)
        setSelectedRowKeys(newSelectedRowKeys)
    }

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange
    }

    return (
        <div className="card">
            <Upload
                isUploadOpen={isOpen}
                setIsUploadOpen={toggleModal}
                title="上传文件"
                maxCount={2}
            />
            <Forms formConfig={formConfig} />
            <p className="mb-[12px]"></p>
            <Tables
                {...tableProps}
                columns={Columns}
                dataSource={dataSource}
                rowSelection={rowSelection}
                headerContent={{
                    isShowFilter: true,
                    settingDisable: ['name'],
                    content: () => [
                        <Button
                            key="button2"
                            onClick={showModal}
                            type="primary"
                            icon={<PlusOutlined />}
                        >
                            导入文件
                        </Button>,
                        <Button
                            disabled={!selectedRowKeys.length}
                            key="button3"
                            type="primary"
                            danger
                            icon={<DeleteOutlined />}
                        >
                            批量删除
                        </Button>,
                        <Button
                            disabled={!selectedRowKeys.length}
                            key="button4"
                            icon={<ReloadOutlined />}
                            onClick={refresh}
                        >
                            刷新
                        </Button>
                    ]
                }}
            />
        </div>
    )
}
