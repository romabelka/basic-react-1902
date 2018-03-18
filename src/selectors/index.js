import { createSelector } from 'reselect'

export const articlesMapSelector = state => state.articles.entities
export const articleListSelector = createSelector(articlesMapSelector, articlesMap => articlesMap.valueSeq().toArray())
export const loadingArticlesSelector = state => state.articles.loading
export const loadedArticlesSelector = state => state.articles.loaded

const commentsSelector = state => state.comments.entities
const filtersSelector = state => state.filters
const idSelector = (_, props) => props.id
const onlyCommentListSelector = state => state.comments.commentsList
const commentNumberSelector = (_, props) => props.commentNumber

export const filtratedArticles = createSelector(articleListSelector, filtersSelector, (articles, filters) => {
    const {selected, dateRange: {from, to}} = filters
    console.log('---', 'recomputing filtration')

    return articles.filter(article => {
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })
})

export const articleSelector = createSelector(articlesMapSelector, idSelector, (articles, id) => articles.get(id))

export const createCommentSelector = () => createSelector(commentsSelector, idSelector, (comments, id) => comments.get(id))

export const oneCommentSelector = () => createSelector(onlyCommentListSelector, commentNumberSelector,
    (comments, number) => comments.get(number))