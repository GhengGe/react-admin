import Mock from 'mockjs'

export default [
    {
        url: '/api/table/list',
        method: 'get',
        response: () => {
            const data = Mock.mock({
                'total|1-999': 1,
                'data|30': [
                    {
                        id: '@uuid',
                        'gender|1': ['male', 'female'],
                        name: '@cname(2,4)', // 中文名字，2-4个字
                        age: '@integer(18, 60)', // 18-60岁之间的整数
                        email: '@email',
                        phone: '@phone', // 动态手机号
                        picture: {
                            large: '@image("200x200", "#50B347", "#FFF", "large")'
                        },
                        nat: '@country()',
                        address: '@county(true)' // 详细地址，包含省市区
                    }
                ]
            })

            return {
                code: 200,
                message: 'ok',
                data
            }
        }
    },
    {
        url: '/api/table/list',
        method: 'post',
        response: () => {
            const data = Mock.mock({
                'total|1-999': 1,
                'data|10': [
                    {
                        'gender|1': ['male', 'female'],
                        name: '肖战',
                        age: 34,
                        email: '@email',
                        phone: '14252637487',
                        picture: {
                            large: '@image("200x200", "#50B347", "#FFF", "large")'
                        },
                        nat: '@country()'
                    }
                ]
            })

            return {
                code: 200,
                message: 'ok',
                data
            }
        }
    },
    {
        url: '/api/table/add',
        method: 'post',
        response: () => ({
            code: 200,
            message: 'ok',
            data: null
        })
    },
    {
        url: '/api/table/delete',
        method: 'post',
        response: () => ({
            code: 200,
            message: 'ok',
            data: null
        })
    }
]
