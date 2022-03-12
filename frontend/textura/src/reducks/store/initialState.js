const initialState = {
    users: {
        isSignedIn: false,
        uid: '',
    },
    art: {
        arts: [],
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
