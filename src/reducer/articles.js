import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE } from '../constants'
import {ADD_COMMENT} from "../constants/index";

const defaultArticles = normalizedArticles.reduce((acc,article)=>({
    ...acc,
    [article.id]:article
}),{})
export default (articlesState = defaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.filter(article => article.id !== payload.id)
        case ADD_COMMENT:{

            const {articleId,newCommentId} = action.payload;
            const article = {...articlesState[articleId]}
            article.comments.push(newCommentId)
            return {
                ...articlesState,
                [articleId]:article
            }
        }
        default:
            return articlesState
    }
}