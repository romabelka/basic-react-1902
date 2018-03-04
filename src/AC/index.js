import { INCREMENT, DELETE_ARTICLE, UPDATE_FILTER_DATE, UPDATE_FILTER_SELECT } from '../constants'

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

export function updateFilterSelect(article) {
    return {
        type: UPDATE_FILTER_SELECT,
        payload: article
    }
}

export function updateFilterDate(date) {
    return {
        type: UPDATE_FILTER_DATE,
        payload: date
    }
}
