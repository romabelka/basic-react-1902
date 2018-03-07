import { CREATE_COMMENT } from '../constants'
import { normalizedComments, normalizedArticles } from '../fixtures'

const commentsByAricle = normalizedArticles.reduce((acc, article) => ({
  ...acc,
  [article.id]: article.comments || []
}), {})

const commentsById = normalizedComments.reduce((acc, comment) => ({
    ...acc,
    [comment.id]: comment
})
, {})

const defaultComments = {
  ...commentsById,
  commentsByAricle
}

export default (commentsState = defaultComments, action) => {
    const {type} = action

    switch (type) {
      case CREATE_COMMENT:
        const commentsByAricle = { ...commentsState.commentsByAricle }
        commentsByAricle[action.payload.article].push(action.payload.id)
        const comments = {
          ...commentsState,
          [action.payload.id]: {
            id: action.payload.id,
            user: action.payload.user,
            text: action.payload.text
          },

          commentsByAricle
         }
       return comments

        default:
            return commentsState
    }
}
