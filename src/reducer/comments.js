import { ADD_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'

const defaultComments = normalizedComments.reduce((acc, comment) => ({
  ...acc,
  [comment.id]: comment
})
, {})

export default (commentsState = defaultComments, action) => {
  const {type, payload} = action

  switch (type) {
    case ADD_COMMENT:
      console.log('add comment')
      return {
        ...commentsState,
        payload
      }
    default:
      return commentsState
  }
}
