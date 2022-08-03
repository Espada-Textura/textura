export const GET_ARTS = 'GET_ARTS'
export const getArtsAction = (arts = []) => {
    return {
        type: 'GET_ARTS',
        payload: arts,
    }
}

export const RESET_ARTS = 'RESET_ARTS'
export const resetArtsActions = () => {
    return {
        type: 'RESET_ARTS',
    }
}

export const CREATE_ART = 'CREATE_ART'
export const createArtAction = (artState) => {
    return {
        type: 'CREATE_ART',
        payload: artState,
    }
}

export const UPDATE_ART = 'UPDATE_ART'
export const updateArtAction = (art) => {
    return {
        type: 'UPDATE_ART',
        payload: art,
    }
}

export const UPDATE_ART_VIEW = 'UPDATE_ART_VIEW'
export const updateArtViewAction = (art) => {
    return {
        type: 'UPDATE_ART',
        payload: art,
    }
}

export const DELETE_ART = 'DELETE_ART'
export const deleteArtAction = (deletedArt) => {
    return {
        type: 'DELETE_ART',
        payload: deletedArt,
    }
}
