import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'

const defaultArticles = normalizedArticles.reduce((acc, article) => ({
    ...acc,
    [article.id]: article
})
, {})

export default (articlesState = defaultArticles, action) => {
    const { type, payload } = action
    let articlesStateObj;

    switch (type) {
      case ADD_COMMENT:
          articlesStateObj = articlesState
          articlesStateObj[payload.articleId].comments.push(payload.id)
          return articlesStateObj
        case DELETE_ARTICLE:
            articlesStateObj = articlesState
            delete articlesStateObj[payload.id]
            return articlesStateObj

        default:
            return articlesState
    }
}
