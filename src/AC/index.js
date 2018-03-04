import { INCREMENT, DELETE_ARTICLE, FILTER_SET_DATE, FILTER_SET_SELECT } from '../constants'

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
export function filterSet(data) {
    if (typeof data.from !== "undefined") {
        return {
            type: FILTER_SET_DATE,
            payload: data
        }
    }
    return {
        type: FILTER_SET_SELECT,
        payload: data
    }
}