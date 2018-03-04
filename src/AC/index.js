import { INCREMENT, DELETE_ARTICLE, SELECT_ARTICLE} from '../constants'
import {SET_DATE_RANGE} from "../constants/index";

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
        type:SELECT_ARTICLE,
        payload:{selected}
    }

}

export function setDateRange(dateRange) {
    return {
        type:SET_DATE_RANGE,
        payload:{dateRange}
    }

}