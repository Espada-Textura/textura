import * as Actions from './actions'
import initialState from '../store/initialState'

export const ArtsReducer = (state = initialState.art, action) => {
    let updatedArts = [...state.arts]
    switch (action.type) {
        case Actions.GET_ARTS:
            // arts: [...action.payload.arts],
            // lastVisible: action.payload.lastVisible,
            return {
                ...state,
                ...{ arts: [...state.arts, ...action.payload.arts] },
                ...{ lastVisible: action.payload.lastVisible },
            }
        case Actions.RESET_ARTS:
            return {
                ...state,
                ...{ arts: [] },
                ...{ lastVisible: [] },
            }
        case Actions.CREATE_ART:
            return {
                ...state,
                ...action.payload,
            }
        case Actions.UPDATE_ART:
            if (!Array.isArray(state.arts)) return { ...state }

            updatedArts = [...state.arts]

            state.arts.forEach((art, index) => {
                if (art.id === action.payload.id) {
                    updatedArts[index] = action.payload
                }
            })
            return {
                ...state,
                ...{ arts: updatedArts },
            }
        case Actions.DELETE_ART:
            if (!Array.isArray(state.arts)) return { ...state }
            updatedArts = []

            updatedArts = state.arts.filter(
                (art) => art.id !== action.payload.id
            )

            return {
                ...state,
                ...{ arts: updatedArts },
            }
        default:
            return state
    }
}
