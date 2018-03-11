import { createSelector } from 'reselect'

const articleListSelector = state => state.articles
const commentsSelector = state => state.comments
const filtersSelector = state => state.filters
const idSelector = (_, props) => props.id

export const filtratedArticles = createSelector(articleListSelector, filtersSelector, (articles, filters) => {
    const {selected, dateRange: {from, to}} = filters
    console.log('---', 'recomputing filtration')

    return Object.keys(articles).filter(id => {
        const article = articles[id];
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })
})

export const createCommentSelector = () => createSelector(commentsSelector, idSelector, (comments, id) => comments[id])
export const createArticlesSelector = () => createSelector(articleListSelector, idSelector, (articles, id) => articles[id])