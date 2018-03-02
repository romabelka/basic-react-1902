const articlesDateFilter = (articles, from, to) => articles.filter(article => {
    const date = Date.parse(article.date)
    return from <= date && date <= to
  })

export const getArticles = state => {
  const inSelected = state.filters.selectedArticles.length > 0
  const from = Date.parse(state.filters.dateRange.from) || 0
  const to = Date.parse(state.filters.dateRange.to) || Infinity

  if (inSelected) {
    const selectedIds = state.filters.selectedArticles.map(selected => selected.value)
    const articles = state.articles.filter(article => selectedIds.includes(article.id))

    return articlesDateFilter(articles, from, to)
  }

  return articlesDateFilter(state.articles, from, to)
}
