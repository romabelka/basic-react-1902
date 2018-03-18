import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, LOAD_PAGE_COMMENTS, SUCCESS } from '../constants'
import {Record, OrderedMap, Map} from 'immutable'
import {arrToMap} from './utils'

const CommentRecord = Record({
    id: null,
    text: null,
    user: null
})

const ReducerState = Record({
    entities: new OrderedMap({}),
    pagination: new Map({}), // pagination: {page: {ids(obj), v} }
    total: null
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

        case LOAD_PAGE_COMMENTS + SUCCESS:
            const data = payload.response
            return state
                .mergeIn(['entities'], arrToMap(data.records, CommentRecord))
                .setIn(['pagination', payload.page, 'loading'], false)
                .setIn(['pagination', payload.page, 'ids'], data.records.map(comment => comment.id))
                .set('total', data.total)

        default:
            return state
    }
}
