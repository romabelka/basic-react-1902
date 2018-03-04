const parsedDate = (date) => Date.parse(date)

export default state => {
  let articles = state.articles

  const isFilterSelected = state.filterSelect.length
  const from = parsedDate(state.filterDate.from) || 0
  const to = parsedDate(state.filterDate.to) || from ? from + 24*60*60*1000 : Infinity

  if (isFilterSelected){
    const filterSelectedIds = state.filterSelect.map(filter => filter.value)
    const filteredArticles = state.articles.filter(article => filterSelectedIds.includes(article.id))
    articles = filteredArticles
  }

  return articles.filter(article => {
    const articleDate = parsedDate(article.date)
    return from <= articleDate && to >= articleDate
  })
}
