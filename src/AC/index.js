import { INCREMENT, DELETE_ARTICLE, SELECTED_ARTICLES, FILTER_ARTICLES } from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function selectArticles(selectedArticles) {
    return {
        type: SELECTED_ARTICLES,
        payload: { selectedArticles }
    }
}

export function filterArticles(filterArticles) {
    return {
        type: FILTER_ARTICLES,
        payload: { filterArticles }
    }
}
