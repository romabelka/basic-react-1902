import { combineReducers } from 'redux'
import counterReducer from './counter'
import articles from './articles'
import filterSelect from './filter-select'

export default combineReducers({
    counter: counterReducer,
    articles,
    filterSelect, 
})