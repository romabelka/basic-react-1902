import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import store from './store'
import history from './history'
import {Translator} from './decorators/translation'
import {dictionary} from './fixtures'

ReactDOM.render(
    <Provider store = {store}>
        <ConnectedRouter history = {history}>
          <Translator dictionary = {dictionary} >
            <App />
          </Translator>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'))

registerServiceWorker()
