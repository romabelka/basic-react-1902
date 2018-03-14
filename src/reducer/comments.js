import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS, FAIL} from '../constants'
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

export default (state = new ReducerState(), action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return state.set(
              ['entities', 'comments', randomId],
              new CommentRecord(payload.comment)
            )

        case LOAD_COMMENTS + START:
            return state.set('loading', true);

        case LOAD_COMMENTS + FAIL:
            return arrToMap(state)

        case LOAD_COMMENTS + SUCCESS:
            return state
              .set('entities', arrToMap(payload.response, CommentRecord))
              .set('loading', false)
              .set('loaded', true)

        default:
            return state
    }
}
