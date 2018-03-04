import defaultArticles from '../fixtures'
import { FILTER_ARTICLES, DELETE_ARTICLE } from '../constants'

export default (filterArticlesState = defaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return filterArticlesState.filter(article => article.id !== payload.id)
        default:
            return filterArticlesState
    }
}
