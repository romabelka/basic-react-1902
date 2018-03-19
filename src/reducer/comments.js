import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, LOAD_COMMENTS_FOR_PAGE, START, SUCCESS } from '../constants'
import {arrToMap} from './utils'
import {OrderedMap, Map, Record} from 'immutable'

const CommentRecord = Record({
    id: null,
    text: null,
    user: null
})

const ReducerState = Record({
    entities: new OrderedMap({}),
    pagination: new Map({}),
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

        case LOAD_COMMENTS_FOR_PAGE + START:
            return state.setIn(['pagination', payload.page, 'loading'], true)

        case LOAD_COMMENTS_FOR_PAGE + SUCCESS:
            return state
                .set('total', response.total)
                .mergeIn(['entities'], arrToMap(response.records, CommentRecord))
                .setIn(['pagination', payload.page, 'ids'], response.records.map(comment => comment.id))
                .setIn(['pagination', payload.page, 'loading'], false)
    }

    return state
}