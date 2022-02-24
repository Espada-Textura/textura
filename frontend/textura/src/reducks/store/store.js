import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware,
} from 'redux'
import { UsersReducer } from '../users/reducer'
import thunk from 'redux-thunk'

export default function createStore() {
    return reduxCreateStore(
        combineReducers({ users: UsersReducer }),
        applyMiddleware(thunk)
    )
}
