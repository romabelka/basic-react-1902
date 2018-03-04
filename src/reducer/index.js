import { combineReducers } from 'redux'
import counterReducer from './counter'
import articles from './articles'
import filterReducer from './filterset'

export default combineReducers({
    counter: counterReducer,
    articles,
    filterset: filterReducer
})