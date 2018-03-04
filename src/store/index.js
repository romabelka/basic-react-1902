import { createStore } from 'redux'
import reducer from '../reducer'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//dev only, no need in prod
window.store = store

export default store
