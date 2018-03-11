import {
  INCREMENT, DELETE_ARTICLE, CHANGE_DATE_RANGE, CHANGE_SELECTION, ADD_NEW_COMMENT,
  UPDATE_ARTICLE_COMMENTS
} from '../constants'

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

export function addNewComment(user, text, articleId) {
  return {
    type: ADD_NEW_COMMENT,
    payload: {
      data: {user, text},
      articleId
    }
  };
}

export function updateArticleComments(articleId, commentId) {
  return {
    type: UPDATE_ARTICLE_COMMENTS,
    payload: {
      articleId,
      commentId
    }
  }
}
