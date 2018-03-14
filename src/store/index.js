import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducer'
import { composeWithDevTools }  from 'redux-devtools-extension'
import logger from '../middlewares/logger'
import randomId from '../middlewares/randomId'
import api from '../middlewares/api'
import thunk from 'redux-thunk'

const enhancer = applyMiddleware(thunk, randomId, api, logger)

const store = createStore(reducer, enhancer)

//dev only, no need in prod
window.store = store

export default store
