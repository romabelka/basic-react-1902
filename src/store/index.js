import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import randomstringid from '../middlewares/randomid'

const enhancer = applyMiddleware(logger)

const saidtodo = applyMiddleware(randomstringid)

const store = createStore(reducer, enhancer, saidtodo)

//dev only, no need in prod
window.store = store

export default store