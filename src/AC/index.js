import { INCREMENT, DELETE_ARTICLE, FILTER_SELECT, FILTER_DATE_RANGE } from '../constants'

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

export function filterSelect(selected) {
  return {
      type: FILTER_SELECT,
      payload: { selected }
  }
}

export function filterDateRange(range) {
  return {
    type: FILTER_DATE_RANGE,
    payload: { range }
  }
}