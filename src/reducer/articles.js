import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'

const defaultArticles = normalizedArticles.reduce((wii, article)=>({
    ...wii,
    [article.id]: article
}), {})

export default (articlesState = defaultArticles, action) => {

    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            let articles = Object.assign({}, articlesState);
            delete articles[payload.id]
            return articles

        case ADD_COMMENT:
            let comments = articlesState[payload.data.articleid].comments
            typeof comments !== 'undefined' ? comments.push(payload.data.id) : articlesState[payload.data.articleid].comments = new Array(payload.data.id)
            //break

        default:
            return articlesState
    }
}