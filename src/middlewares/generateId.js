import {ADD_COMMENT} from "../constants/index";

export default store => next => action => {
    if(action.type === ADD_COMMENT) {
        action.payload.newCommentId = Math.random().toString(36).slice(2);
    }
    next(action)
}