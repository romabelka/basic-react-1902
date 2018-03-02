import { createStore } from 'redux'
import reducer from '../reducer'

const store = createStore(reducer)

//dev only, no need in prod
window.store = store

export default store