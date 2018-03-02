import { INCREMENT, DELETE_ARTICLE, DATE_RANGE, SELECT_ARTICLE } from '../constants'

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

export function selectArticle(article) {
  return {
    type: SELECT_ARTICLE,
    payload: article,
  }
}

export function updateDateRange({ from, to }) {
  return {
    type: DATE_RANGE,
    payload: { from, to }
  }
}
