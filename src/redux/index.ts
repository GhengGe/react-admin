import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reduxThunk from 'redux-thunk'

import menu from './modules/menu/reducer'
import theme from './modules/theme/reducer'
import user from './modules/user/reducer'
import { PERSIT_CONFIG } from './constant'

// combineReducers 用于合并多个 reducer
const reducer = combineReducers({
    menu,
    user,
    theme
})

// 配置持久化参数，持久化数据在 localStorage 中的存储 key，避免不同项目或模块的数据冲突。
const persitConfig = {
    key: PERSIT_CONFIG,
    storage: storage
}

// 创建持久化 Reducer
const persist_reducers = persistReducer(persitConfig, reducer)

// 创建 Redux store，传入持久化的 reducer。通过 applyMiddleware 添加 reduxThunk 中间件，支持异步 action 和函数式 dispatch。
let store = createStore(persist_reducers, applyMiddleware(reduxThunk))

// 创建 persistor，用于控制持久化的生命周期，比如启动持久化、清理缓存等。
const persistor = persistStore(store)

// 定义一个函数，手动清除 localStorage 中对应的持久化数据，方便调试或重置状态。
const clearPersistor = () => {
    localStorage.removeItem(`persist:${PERSIT_CONFIG}`)
}
export { clearPersistor, persistor, store }
