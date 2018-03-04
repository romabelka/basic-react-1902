import { INCREMENT, DELETE_ARTICLE, CHANGE_SELECTED, CHANGE_RANGE } from '../constants'

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

export function changeSelected(selected) {
    return {
        type: CHANGE_SELECTED,
        payload: { selected }
    }
}

export function changeRange(range) {
    return {
        type: CHANGE_RANGE,
        payload: { range }
    }
}
