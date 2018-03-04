import { INCREMENT, DELETE_ARTICLE, SELECT_FILTER, UPDATE_CALENDAR } from '../constants'

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

export function selectArticle(selected) {
    return {
        type: SELECT_FILTER,
        payload: { selected }
    }
}

export function updateCalendar(range) {
    return {
        type: UPDATE_CALENDAR,
        payload: { range }
    }
}