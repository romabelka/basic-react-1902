import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducer'
import { composeWithDevTools }  from 'redux-devtools-extension'
import logger from '../middlewares/logger'
<<<<<<< HEAD
import commentsUID from '../middlewares/commentsUID'

const enhancer = composeWithDevTools(applyMiddleware(logger, commentsUID))
=======
import randomId from '../middlewares/randomId'
import api from '../middlewares/api'
import thunk from 'redux-thunk'

const enhancer = applyMiddleware(thunk, randomId, api, logger)
>>>>>>> upstream/master

const store = createStore(reducer, enhancer)

//dev only, no need in prod
window.store = store

export default store
