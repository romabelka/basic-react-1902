import { ADD_COMMENT } from '../constants'
import {arrToMap} from './utils'
import { Record } from 'immutable'
import {LOAD_COMMENTS, START, SUCCESS} from "../constants/index";

const CommentRecord = Record({
    id: null,
    user: null,
    text: null,
})

const ReducerState = Record({
    entities: arrToMap([], CommentRecord),
    loading: false,
    loaded: false,
    error: null
})

export default (state = new ReducerState(), action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return state.set(randomId, {
                ...payload.comment,
                id: randomId
            })
        case LOAD_COMMENTS + START:
            return state.set("loading",true)

        case LOAD_COMMENTS + SUCCESS:
            return state.update("entities",comments=>comments.merge(arrToMap(payload.response,CommentRecord)))
                .set("loading",false)
                .set("loaded",true)
        default:
            return state
    }
}