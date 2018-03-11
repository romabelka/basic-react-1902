import { ADD_NEW_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'

const defaultComments = normalizedComments.reduce((acc, comment) => ({
    ...acc,
    [comment.id]: comment
}), {});

export default (commentsState = defaultComments, action) => {
    const { type, payload } = action;

    switch (type) {
      case ADD_NEW_COMMENT:
            let commentData = payload.data;
            return {
                ...commentsState,
                [commentData.id]: commentData
            };
        default:
            return commentsState
    }
}
