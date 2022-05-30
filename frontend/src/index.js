import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createStore from './reducks/store/store'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App'

export const store = createStore()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
