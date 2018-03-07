import { createSelector } from 'reselect'

export const articleListSelector = state => Object.values(state.articles)
const commentsSelector = state => state.comments
const filtersSelector = state => state.filters
const idSelector = (_, props) => props.id

export const filtratedArticles = createSelector(articleListSelector, filtersSelector, (articles, filters) => {
    const {selected, dateRange: {from, to}} = filters
    console.log('---', 'recomputing filtration')

    return articles.filter(article => {
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })
})

export const getCommentsByArticle = (state, props) => state.comments.commentsByAricle[props.articleId]

export const createCommentSelector = () => createSelector(commentsSelector, idSelector, (comments, id) => comments[id])
