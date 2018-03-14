import { ADD_COMMENT } from '../constants'
<<<<<<< HEAD
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
      return {
        ...commentsState,
        [payload.comment.id]: payload.comment
      }
    default:
      return commentsState
  }
}
=======
import {normalizedComments} from '../fixtures'
import {arrToMap} from './utils'

export default (state = arrToMap(normalizedComments), action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return state.set(randomId, {
                ...payload.comment,
                id: randomId
            })

        default:
            return state
    }
}
>>>>>>> upstream/master
