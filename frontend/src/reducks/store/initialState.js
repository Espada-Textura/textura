const initialState = {
    users: {
        isSignedIn: false,
        uid: '',
    },
    art: {
        arts: [],
        pagination: {
            currentStartAt: 0,
            endAt: 20,
        },
        lastVisible: {},
    },
    System: {
        progress: 0,
        requestting: false,
        requestSuccessed: false,
        requestError: false,
        errorMessage: '',
        responseData: {},
    },
}

export default initialState
