import { INCREMENT, DELETE_ARTICLE, CHANGE_DATE_RANGE, FILTER_BY_DATE } from '../constants'

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

export function filterDate(range) {
    return {
        type: CHANGE_DATE_RANGE,
        payload: {range}
    }
}

export function filterArticlesByDate(firstDate, secondDate) {
    return {
        type: FILTER_BY_DATE,
        payload: {firstDate, secondDate}
    }
}