import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS, LOAD_ALL_COMMENTS } from '../constants'
import {Record, OrderedMap} from 'immutable'
import {arrToMap} from './utils'

const CommentRecord = Record({
    id: null,
    text: null,
    user: null
})

const ReducerState = Record({
    entities: new OrderedMap({}),
    loadedIds: [],
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

        case LOAD_ALL_COMMENTS + SUCCESS:
            const ids = response.records.map(comment => comment.id)
            return state.mergeIn(['entities'], arrToMap(response.records, CommentRecord))
                .mergeIn(['loadedIds'], ids)
                .updateIn(['total'], value => response.total === value ? value : response.total )

        default:
            return state
    }
}
