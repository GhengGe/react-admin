import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

import '/@/assets/aliFont/iconfont.css'

import '/@/design/index.less'

import { store } from '/@/redux/index'
import { getMenuListAction } from '/@/redux/modules/menu/action'
import { Router, useLazy } from '/@/router/index'

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

interface AppProps {
    user: {
        name: string
    }
    getMenuListAction: () => Promise<void>
}

const useMenuLoader = (props: AppProps) => {
    const { getMenuListAction, user } = props
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (location.hash != '#/login' && user.name) {
            getMenu()
        }
    }, [user.name])

    // 通过接口获取后台返回的路由
    const getMenu = async () => {
        setLoading(true)
        await getMenuListAction()
        const routers = store.getState().menu.menuList
        useLazy(routers)
        setLoading(false)
    }

    return { loading }
}

const App: React.FC<AppProps> = (props: AppProps) => {
    const { loading } = useMenuLoader(props)
    return (
        <Spin spinning={loading} className="root-loading" indicator={antIcon} tip="Loading">
            <HashRouter>
                <Router />
            </HashRouter>
        </Spin>
    )
}

// 用于连接 Redux 状态和分发动作
export default connect((state: any) => state, { getMenuListAction })(App)
