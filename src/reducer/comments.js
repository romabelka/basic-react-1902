import {} from '../constants'
import { normalizedComments } from '../fixtures'
import { ADD_COMMENT } from '../constants'

const defaultComments = normalizedComments.reduce((acc, comment) => ({
    ...acc,
    [comment.id]: comment
})
, {})

export default (commentsState = defaultComments, action) => {
    const {type, payload} = action
    let newCommentsState={};

    switch (type) {

      case ADD_COMMENT:
          debugger;
          newCommentsState = commentsState
          newCommentsState[payload.id] = {
            id: payload.id,
            user: payload.user,
            text: payload.comment
          }
          return newCommentsState
        default:
            return commentsState
    }
}
