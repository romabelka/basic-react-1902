import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, LOAD_COMMENTS, START, SUCCESS } from '../constants'
import {Record, OrderedMap} from 'immutable'
import {arrToMap} from './utils'

const CommentRecord = Record({
    id: null,
    text: null,
    user: null
})

const ReducerState = Record({
    entities: new OrderedMap({}),
    loadedComments: [],
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

        case LOAD_COMMENTS + START:
            let item = state.loadedComments[payload.i - 1]
            return typeof item === 'undefined' ? state.setIn(['loadedComments', payload.i - 1], false) : state

        case LOAD_COMMENTS + SUCCESS:
            console.log("SUCCESS load comments: ", response)

            return state.set('total', response.total)
                .setIn(['loadedComments', payload.i - 1], response.records)//arrToMap(response.records, CommentRecord))

        default:
            return state
    }
}