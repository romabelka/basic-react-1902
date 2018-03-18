import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, LOAD_PAGE_COMMENTS, START, SUCCESS } from '../constants'
import {Record, OrderedMap} from 'immutable'
import {arrToMap} from './utils'

const CommentRecord = Record({
    id: null,
    text: null,
    user: null
})

const PageRecord = Record({
    no: null,
    comments: [],
    loading: false,
    loaded: false
})

const ReducerState = Record({
    entities: new OrderedMap({}),
    pages: new OrderedMap({}),
    total: 0
})

export default (state = new ReducerState(), action) => {
    const { type, payload, randomId, response} = action

    switch (type) {
        case ADD_COMMENT:
            return state.setIn(['entities', randomId], new CommentRecord({
                ...payload.comment,
                id: randomId
            }))

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return state.mergeIn(['entities'], arrToMap(response, CommentRecord))

        case LOAD_PAGE_COMMENTS + START:
          return state
            .setIn(['pages', payload.no], new PageRecord( {
              no: payload.no,
              comment: [],
              loading: true,
              loaded: false }
            ))

        case LOAD_PAGE_COMMENTS + SUCCESS:
            console.log('LOAD_PAGE_COMMENTS + SUCCESS', response);
            return state
              .mergeIn(['entities'], arrToMap(response.records, CommentRecord))
              .setIn(['pages', payload.no, 'comments'], response.records.map(comment => comment.id))
              .setIn(['total'], response.total)
              .setIn(['pages', payload.no, 'loading'], false)
              .setIn(['pages', payload.no, 'loaded'], true)

        default:
            return state
    }
}
