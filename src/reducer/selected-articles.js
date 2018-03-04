import { DELETE_ARTICLE, SELECTED_ARTICLES } from '../constants'

export default (selectedArticlesState=null, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return selectedArticlesState.filter(selectedArticle => selectedArticle.value !== payload.id)
        case SELECTED_ARTICLES:
            return payload.selectedArticles
        default:
            return selectedArticlesState
    }
}
