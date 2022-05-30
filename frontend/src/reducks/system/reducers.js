import * as Actions from './actions'
import initialState from '../store/initialState'

export const SystemReducer = (state = initialState.System, action) => {
    switch (action.type) {
        case Actions.UPDATE_REQUEST_STAUS:
            return {
                ...state,
                ...action.payload,
            }
        case Actions.RESET_REQUEST_STAUS:
            return { state }
        default:
            return state
    }
}
