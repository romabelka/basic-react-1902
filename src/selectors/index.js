import { createSelector } from 'reselect'

const articleListSelector = state => state.articles
const commentsSelector = state => state.comments
const filtersSelector = state => state.filters
const idSelector = (_, props) => props.id

export const filtratedArticles = createSelector(articleListSelector, filtersSelector, (articles, filters) => {
    const {selected, dateRange: {from, to}} = filters
    console.log('---', 'recomputing filtration')
    let filtratedArticlesArray = []
    for (const id in articles){
      const published = Date.parse(articles[id].date)
      if ((!selected.length || selected.includes(articles[id])) &&
          (!from || !to || (published > from && published < to))) {
              filtratedArticlesArray.push(articles[id])
          }
    }
    return filtratedArticlesArray
})

export const createCommentSelector = () => createSelector(commentsSelector, idSelector, (comments, id) => comments[id])
