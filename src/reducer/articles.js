import defaultArticles from '../fixtures'
import { DELETE_ARTICLE, SELECTED_ARTICLES } from '../constants'

export default (articlesState = defaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.filter(article => article.id !== payload.id)
        case SELECTED_ARTICLES:
            let idList = payload.selectedArticles.map(selectedArticle => selectedArticle.value)
            return defaultArticles.filter(article =>
               idList.includes(article.id)
            )
        default:
            return articlesState
    }
}
