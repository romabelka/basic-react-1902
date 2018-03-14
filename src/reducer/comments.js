import { ADD_COMMENT, START, SUCCESS, FAIL, LOAD_ALL_COMMENTS } from '../constants'
import {normalizedComments} from '../fixtures'
import {arrToMap} from './utils'
import { Record } from 'immutable'

const CommentRecord = Record({
  id: null,
  user: null,
  text: null,
})

const ReducerState = Record({
  entities: arrToMap([], CommentRecord),
  loading: false,
  loaded: false,
  error: null
})

export default (comments = new ReducerState(), action) => {
    const { type, payload, randomId, response } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.set(randomId, {
                ...payload.comment,
                id: randomId
            })

        case LOAD_ALL_COMMENTS + START:
          return comments.set('loading', true)

        case LOAD_ALL_COMMENTS + SUCCESS:
          return comments
            .set('entities', arrToMap(response, CommentRecord))
            .set('loading', false)
            .set('loaded', true)

        default:
            return comments
    }
}
