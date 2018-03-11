import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'

const defaultArticles = normalizedArticles.reduce((acc, article) => ({
    ...acc,
    [article.id]: article
})
, {})

export default (articlesState = defaultArticles, action) => {
    const { type, payload } = action
    const newArticles = {...articlesState}

    switch (type) {
        case ADD_COMMENT:
            const newArticle = {...newArticles[payload.articleId]}
            newArticle.comments = [...(newArticle.comments || []), payload.id];

            newArticles[payload.articleId] = newArticle;
            return newArticles

        case DELETE_ARTICLE:
            delete newArticles[payload.id]
            // вообще по-хорошему надо удалять и комментарии, но нет
            return newArticles

        default:
            return articlesState
    }
}