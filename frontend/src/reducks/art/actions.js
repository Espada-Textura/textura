export const GET_ARTS = 'GET_ARTS'
export const getArtsAction = (arts = []) => {
    return {
        type: 'GET_ARTS',
        payload: arts,
    }
}

export const CREATE_ART = 'CREATE_ART'
export const createArtAction = (artState) => {
    return {
        type: 'CREATE_ART',
        payload: artState,
    }
}
