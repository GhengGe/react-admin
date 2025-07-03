import { defaultRequest } from '/@/utils/http/index'

export function getVisitorList(params: { pageSize: number; pageNum: number }) {
    return defaultRequest.request({
        url: '/visitor/list',
        method: 'post',
        data: params
    })
}
