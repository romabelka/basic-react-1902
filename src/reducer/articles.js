import defaultArticles from '../fixtures'
import { DELETE_ARTICLE, FILTER_BY_DATE } from '../constants'

export default (articlesState = defaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.filter(article => article.id !== payload.id)
        
        case FILTER_BY_DATE:
                const filteredArticles = defaultArticles.filter(article => 
                    !payload.firstDate || !payload.secondDate || (payload.firstDate < Date.parse(article.date) && Date.parse(article.date) < payload.secondDate))

                return filteredArticles
        
        default:
            return articlesState
    }
}