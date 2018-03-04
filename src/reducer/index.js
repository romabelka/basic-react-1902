import { combineReducers } from 'redux'
import counterReducer from './counter'
import articles from './articles'
import filtersArticles from './filters'

export default combineReducers({
    counter: counterReducer,
    articles,
    filtersArticles
})