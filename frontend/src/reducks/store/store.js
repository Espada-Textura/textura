import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware,
} from 'redux'
import { UsersReducer } from '../users/reducer'
import { ArtsReducer } from '../art/reducers'
import { SystemReducer } from '../system/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

export default function createStore() {
    return reduxCreateStore(
        combineReducers({
            users: UsersReducer,
            art: ArtsReducer,
            system: SystemReducer,
        }),
        composeWithDevTools(applyMiddleware(thunk))
    )
}
