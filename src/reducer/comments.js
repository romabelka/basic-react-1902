import { ADD_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'

const defaultComments = normalizedComments.reduce((acc, comment) => ({
    ...acc,
    [comment.id]: comment
})
, {})

export default (commentsState = defaultComments, action) => {
    const { type, payload } = action
    const newComments = {...commentsState}

    switch (type) {
        case ADD_COMMENT: 
            const { id, user, text } = payload;
            return {
                ...newComments,
                [payload.id]: { id, user, text }
            };
            
        default:
            return commentsState
    }
}