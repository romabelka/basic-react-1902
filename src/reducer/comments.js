import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS, FAIL } from '../constants'
import {normalizedComments} from '../fixtures'
import {arrToMap} from './utils'
import { Record, OrderedMap, fromJS } from 'immutable'

export default (state = fromJS({}), action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return state.set(randomId, {
                ...payload.comment,
                id: randomId
            })
        case LOAD_COMMENTS + START:
            return state.set(payload.id, fromJS({
                loading: true
            }))
        case LOAD_COMMENTS + SUCCESS:
            return state.set(payload.id, fromJS({
                loading: false,
                articleComments: fromJS(payload.response)
            }))


        default:
            return state
    }
}