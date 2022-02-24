import { signInAction } from './actions'

export const signIn = () => {
    return async (dispatch, getState) => {
        const state = getState()
        dispatch(signInAction({}))
    }
}
