import {INCREMENT, DELETE_ARTICLE, CHANGE_DATE_RANGE, CHANGE_SELECTION} from '../constants'
import {ADD_COMMENT, CHANGE_USERNAME} from "../constants/index";

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

export function changeDateRange(dateRange) {
    return {
        type: CHANGE_DATE_RANGE,
        payload: { dateRange }
    }
}

export function changeSelection(selected) {
    return {
        type: CHANGE_SELECTION,
        payload: { selected }
    }
}

export function addComment(articleId, user, text) {
    return {
        type: ADD_COMMENT,
        payload: { articleId, user, text }
    }
}

export function changeUsername(username) {
    return {
        type: CHANGE_USERNAME,
        payload: {username}
    }
}