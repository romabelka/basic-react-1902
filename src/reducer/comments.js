import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS } from '../constants'
import {normalizedComments} from '../fixtures'
import {arrToMap} from './utils'
import { Record } from 'immutable'


const CommentRecord = Record({
    id: null,
    user: null,
    text: null
})

const ReducerState = Record({
    entities: arrToMap([], CommentRecord),
    loading: false,
    loaded: false
})

export default (comments = new ReducerState(), action) => {
//export default (state = arrToMap(normalizedComments), action) => {
    const { type, payload, response, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.set(randomId, {
                ...payload.comment,
                id: randomId
            })

        case LOAD_COMMENTS + START:
            return comments.set('loading', true)

        case LOAD_COMMENTS + SUCCESS:
            console.log("bzzzzz", response)
            return comments
                .set('entities', arrToMap(response, CommentRecord))
                .set('loading', false)
                .set('loaded', true)

        default:
            return comments
    }
}