import * as Actions from './actions'
import initialState from '../store/initialState'
import { CgBrackets } from 'react-icons/cg'

export const ArtsReducer = (state = initialState.art, action) => {
    let updatedArts = [...state.arts]
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
