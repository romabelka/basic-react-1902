import {applyMiddleware, createStore} from 'redux'
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import reducer from '../reducer'

const store = createStore(reducer, applyMiddleware(reduxLogger, reduxThunk));

//dev only, no need in prod
window.store = store;

export default store;
