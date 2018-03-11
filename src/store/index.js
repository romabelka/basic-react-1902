import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
//import logger from '../middlewares/logger';
import { handleNewComment } from '../middlewares/handle-new-comment';
import { logger } from 'redux-logger';

const enhancer = applyMiddleware(logger, handleNewComment);

const store = createStore(reducer, enhancer);

//dev only, no need in prod
window.store = store;

export default store;
