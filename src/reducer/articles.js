import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'

const defaultArticles = normalizedArticles.reduce((acc, article) => ({
  ...acc,
  [article.id]: article
}), {})

export default (articlesState = defaultArticles, action) => {
  const { type, payload } = action
  const articleInst = JSON.parse(JSON.stringify(articlesState))

  switch (type) {
    case DELETE_ARTICLE:
      delete articleInst[payload.id]
      return articleInst
    case ADD_COMMENT:
      articleInst[payload.articleId].comments = [...(articleInst[payload.articleId].comments || []), payload.comment.id]
      return articleInst
    default:
      return articleInst
  }
}
