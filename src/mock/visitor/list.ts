import Mock from 'mockjs'

export default [
    {
        url: '/api/visitor/list',
        method: 'post',
        response: () => {
            const data = Mock.mock({
                'total|1-999': 1,
                'list|10': [
                    {
                        'gender|1': ['male', 'female'],
                        name: {
                            title: '@title',
                            first: '@first',
                            last: '@last'
                        },
                        email: '@email',
                        picture: {
                            large: '@image("200x200", "#50B347", "#FFF", "large")',
                            medium: '@image("100x100", "#50B347", "#FFF", "medium")',
                            thumbnail: '@image("50x50", "#50B347", "#FFF", "thumb")'
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
    }
]
