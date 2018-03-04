import { combineReducers } from 'redux'
import counterReducer from './counter'
import articles from './articles'
import selectedArticles from './selected-articles'
import filterArticles from './filter-articles'

export default combineReducers({
    counter11: counterReducer,
    articles,
    selectedArticles,
    filterArticles
})
