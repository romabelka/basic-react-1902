const parsedDate = (date) => Date.parse(date)

export default state => {
  let articles = state.articles
  const filterState = state.filter
  const isFilterSelected = filterState.select.length
  const from = parsedDate(filterState.date.from) || 0
  const to = parsedDate(filterState.date.to) || from ? from + 24*60*60*1000 : Infinity

  if (isFilterSelected){
    const filterSelectedIds = filterState.select.map(filter => filter.value)
    const filteredArticles = state.articles.filter(article => filterSelectedIds.includes(article.id))
    articles = filteredArticles
  }

  return articles.filter(article => {
    const articleDate = parsedDate(article.date)
    return from <= articleDate && to >= articleDate
  })
}
