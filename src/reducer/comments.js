import { ADD_COMMENT, LOAD_COMMENTS, SUCCESS, START } from '../constants'
import {arrToMap} from './utils'
import {Record} from 'immutable'

const CommentRecord = Record({
    id: null,
    text: null,
    user: null,
})

const ReducerState = Record({
    entities: arrToMap([], CommentRecord),
    loading: false,
    loaded: false,
    error: null
})

export default (comments = new ReducerState(), action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.setIn(['entities', randomId], { ...payload.comment, id: randomId })

        case LOAD_COMMENTS + START:
            return comments.set('loading', true)

        case LOAD_COMMENTS + SUCCESS:
            return comments
              .update('entities', comments => Object.assign(comments, arrToMap(payload.response, CommentRecord)))
              .set('loading', false)
              .set('loaded', true)

        default:
            return comments
    }
}
