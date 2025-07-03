// immer解决手动编写复杂的展开操作符（...）
// Redux Toolkit 内置了 Immer，无需额外安装
import produce from 'immer'
import { AnyAction } from 'redux'

import * as types from '/@/redux/constant'
import { UserInfoState } from '/@/redux/interface'

const userState: UserInfoState = {
    name: '',
    auth: '',
    token: '',
    permissions: []
}

// user reducer
const user = (state: UserInfoState = userState, action: AnyAction) =>
    produce(state, (draftState) => {
        switch (action.type) {
            case types.SET_TOKEN:
                draftState.token = action.token
                break
            case types.SET_NAME:
                draftState.name = action.name
                break
            case types.SET_PERMISSIONS:
                draftState.permissions = action.permissions
                break
            case types.CLEAR_INFO:
                draftState.name = ''
                draftState.auth = ''
                draftState.token = ''
                break
            default:
                return draftState
        }
    })

export default user
