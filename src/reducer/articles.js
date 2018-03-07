import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE } from '../constants'

const defaultArticles = normalizedArticles.reduce((acc, article) => ({
  ...acc,
  [article.id]: {
    id: article.id,
    date: article.date,
    title: article.title,
    text: article.text
  }
}), {})

export default (articlesState = defaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.filter(article => article.id !== payload.id)

        default:
            return articlesState
    }
}
