import { defaultRequest } from '/@/utils/http/index'

export function getTableList() {
    return defaultRequest.request({
        url: '/table/list',
        method: 'get'
    })
}

export function postTableList(params: {
    name?: string
    age?: number
    pageSize: number
    pageNum: number
}) {
    return defaultRequest.request({
        url: '/table/list',
        method: 'post',
        data: params
    })
}

export function postTableDelete(params: { id: string[] }) {
    return defaultRequest.request({
        url: '/table/delete',
        method: 'post',
        data: params
    })
}

export function postTableAdd(params: { name: string }) {
    return defaultRequest.request({
        url: '/table/add',
        method: 'post',
        data: params
    })
}
