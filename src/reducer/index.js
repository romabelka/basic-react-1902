import { combineReducers } from 'redux'
import counterReducer from './counter'
import articles from './articles'
import filterSelect from './filterSelect'
import filterDate from './filterDate'

export default combineReducers({
    counter: counterReducer,
    articles,
    filterSelect,
    filterDate
})
