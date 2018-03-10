import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducer'
import { composeWithDevTools }  from 'redux-devtools-extension'
import logger from '../middlewares/logger'
import commentsUID from '../middlewares/commentsUID'

const enhancer = composeWithDevTools(applyMiddleware(logger, commentsUID))

const store = createStore(reducer, enhancer)

//dev only, no need in prod
window.store = store

export default store
