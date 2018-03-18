import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS, LOAD_COMMENT } from '../constants'
import {Record, OrderedMap} from 'immutable'
import {arrToMap} from './utils'

const CommentRecord = Record({
    id: null,
    text: null,
    user: null
})

const ReducerState = Record({
    entities: new OrderedMap({}),
    commentsList: new OrderedMap({}),
})

export default (state = new ReducerState(), action) => {
    const { type, payload, randomId, response } = action

    switch (type) {
        case ADD_COMMENT:
            return state.setIn(['entities', randomId], new CommentRecord({
                ...payload.comment,
                id: randomId
            }))

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return state.mergeIn(['entities'], arrToMap(response, CommentRecord))

        case LOAD_COMMENT + SUCCESS:
            return state.setIn(['commentsList', payload.commentNumber], payload.response.records[0]);

        default:
            return state
    }
}