import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS } from '../constants'
import {Record, OrderedMap, Set} from 'immutable'
import {arrToMap} from './utils'
import {LOAD_COMMENTS, START} from "../constants/index";

const CommentRecord = Record({
    id: null,
    text: null,
    user: null
})

const ReducerState = Record({
    entities: new OrderedMap({}),
    pages: new OrderedMap({}),
    loading: new Set([]),
    loaded: new Set([]),
    total:0
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
        case LOAD_COMMENTS + START:
            return state.mergeIn(['loading'], new Set([payload.page]))
        case LOAD_COMMENTS + SUCCESS:
            return state.setIn(['pages',payload.page], arrToMap(payload.response.records, CommentRecord))
                .mergeIn(['loaded'],new Set([payload.page])).set('total',payload.response.total)
        default:
            return state
    }
}