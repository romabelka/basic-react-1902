import {} from '../constants'
import { normalizedComments } from '../fixtures'
import {ADD_COMMENT} from "../constants/index";

const defaultComments = normalizedComments.reduce((acc, comment) => ({
    ...acc,
    [comment.id]: comment
})
, {})

export default (commentsState = defaultComments, action) => {
    const {type} = action

    switch (type) {
        case ADD_COMMENT:{
            console.log(action.payload)
            const {newCommentId,user,text} = action.payload;
            return {
                ...commentsState,
                [newCommentId]:{id:newCommentId,user,text}
            }
        }
        default:
            return commentsState
    }
}