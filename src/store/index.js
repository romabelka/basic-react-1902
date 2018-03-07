import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import createCommentId from '../middlewares/createCommentId'

const enhancer = applyMiddleware(logger)

const createComment = applyMiddleware(createCommentId)

const store = createStore(reducer, enhancer, createComment)

//dev only, no need in prod
window.store = store

export default store
