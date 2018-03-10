import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'

const defaultArticles = normalizedArticles.reduce((wii, article)=>({
    ...wii,
    [article.id]: article
}), {})

export default (articlesState = defaultArticles, action) => {

    const { type, payload } = action

    let articles = Object.assign({}, articlesState);
    switch (type) {
        case DELETE_ARTICLE:
            delete articles[payload.id]
            return articles

        case ADD_COMMENT:
            let comments = articles[payload.data.articleid].comments
            typeof comments !== 'undefined' ? comments.push(payload.data.id) : comments = new Array(payload.data.id)
            return articles

        default:
            return articlesState
    }
}