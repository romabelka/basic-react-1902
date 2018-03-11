import { normalizedArticles  } from '../fixtures';
import { DELETE_ARTICLE, UPDATE_ARTICLE_COMMENTS } from '../constants';

const defaultArticles = normalizedArticles.reduce((acc, article) => {
   return {
     ...acc,
     [article.id]: article
   }
}, {});

export default (articlesState = defaultArticles, action) => {
    const { type, payload } = action;

    switch (type) {
        case DELETE_ARTICLE:
          let articlesForDelete = {...articlesState};
          delete articlesForDelete[payload.id];
          return articlesForDelete;

      case UPDATE_ARTICLE_COMMENTS:
          let articlesForUpdate = {...articlesState};
          let article = articlesForUpdate[payload.articleId];
          if (!article.comments) {
            article.comments = [];
          }
          article.comments.push(payload.commentId);
          articlesForUpdate[payload.articleId] = article;
          return articlesForUpdate;

        default:
            return articlesState
    }
}
