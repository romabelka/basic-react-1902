import {ADD_COMMENT} from '../constants'
import { normalizedComments } from '../fixtures'

const defaultComments = normalizedComments.reduce((acc, comment) => ({
    ...acc,
    [comment.id]: comment
})
, {})

export default (commentsState = defaultComments, action) => {
    const {type} = action

    switch (type) {
        case ADD_COMMENT:
            let comment = {}
            comment['id'] = action.payload.uuid
            comment['text'] = action.payload.text
            comment['user'] = 'USER1'
            commentsState[action.payload.uuid] = comment
            console.log('COMMENT STATE', commentsState)
            return commentsState

        default:
            return commentsState
    }
}
