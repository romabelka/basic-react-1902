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

export function selectArticle(article, selectedArticles) {
  const  payload = [ ...selectedArticles ]
  payload.push(article)

  return {
    type: SELECT_ARTICLE,
    payload,
  }
}

export function dateRange({ from, to }) {
  return {
    type: DATE_RANGE,
    payload: { from, to }
  }
}
