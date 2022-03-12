export const UPDATE_REQUEST_STAUS = 'UPDATE_REQUEST_STAUS'
export const updateRequesetStatusAction = (status) => {
    return {
        type: 'UPDATE_REQUEST_STAUS',
        payload: status,
    }
}

export const RESET_REQUEST_STAUS = 'RESET_REQUEST_STAUS'
export const resetRequesetStatusAction = () => {
    return {
        type: 'RESET_REQUEST_STAUS',
    }
}
