import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS, FAIL } from '../constants'
import {arrToMap} from './utils'
import { OrderedMap } from 'immutable'

export default (state = new OrderedMap({}), action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return state.set(randomId, {
                ...payload.comment,
                id: randomId
            })

        case LOAD_COMMENTS + SUCCESS:
            const {response} = payload;
            response.forEach((comment) => {
                state = state.set(comment.id, { ...comment } )
            });
            return state;

        default:
            return state
    }
}