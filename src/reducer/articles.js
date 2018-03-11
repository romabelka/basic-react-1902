import {normalizedArticles} from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'

const defaultArticles = normalizedArticles.reduce((acc, article) => ({
    ...acc,
    [article.id]: article
})
, {})

export default (articlesState = defaultArticles, action) => {
    const { type, payload } = action

    console.log('ARTICLES', articlesState)
    switch (type) {
        case ADD_COMMENT:
            let id = Object.keys(articlesState)[0]
            articlesState[id].comments.push(action.payload.uuid)
            return articlesState

        case DELETE_ARTICLE:
            return articlesState.filter(article => article.id !== payload.id)

        default:
            return articlesState
    }
}
