import * as Actions from './actions'
import initialState from '../store/initialState'

export const ArtsReducer = (state = initialState.art, action) => {
    switch (action.type) {
        case Actions.GET_ARTS:
            return {
                ...state,
                arts: action.payload,
            }
        case Actions.CREATE_ART:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}
