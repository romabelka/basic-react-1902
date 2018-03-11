import { ADD_NEW_COMMENT } from '../constants';
import { updateArticleComments } from '../AC';
import randomString from 'randomstring';

export const handleNewComment = (store) => (next) => (action) => {
  if (action.type === ADD_NEW_COMMENT) {
    let newAction = {...action};
    let commentId = randomString.generate(12);
    newAction.payload.data.id = commentId;
    let result = next(newAction);
    store.dispatch(updateArticleComments(newAction.payload.articleId, commentId));
    return result;
  }

  return next(action);
};
