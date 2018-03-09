import { normalizedArticles as defaultArticles } from '../fixtures'
import { DELETE_ARTICLE } from '../constants'

const commentsObj = defaultArticles.reduce((wii, article)=>({
    ...wii,
    [article.id]: article
}), {})

export default (articlesState = defaultArticles, action) => {
    console.log("! ", commentsObj)

    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.filter(article => article.id !== payload.id)

        default:
            return articlesState
    }
}