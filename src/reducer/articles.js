import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'

const defaultArticles = normalizedArticles.reduce((wii, article)=>({
    ...wii,
    [article.id]: article
}), {})

export const listArticles = normalizedArticles

export default (articlesState = normalizedArticles, action) => {
    console.log("! ", defaultArticles)

    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.filter(article => article.id !== payload.id)
        case ADD_COMMENT:
            //articlesState
        default:
            return articlesState
    }
}