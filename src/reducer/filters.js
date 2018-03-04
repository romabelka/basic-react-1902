import { FILTER_DATE_RANGE, FILTER_SELECT, DELETE_ARTICLE } from '../constants'

const defaultFilters = {
  selected: [],
  range: {
    from: null,
    to: null
  }
}

export default (filtersArticles = defaultFilters, action) => {
  const {type, payload} = action

  switch (type) {
    case FILTER_DATE_RANGE:
      return {...filtersArticles, range: payload.range}

    case FILTER_SELECT:
      return {...filtersArticles, selected: payload.selected}

    case DELETE_ARTICLE:
      return {...filtersArticles, selected: filtersArticles.selected.filter(
        articles => articles.value !== payload.id
      )}

    default:
      return filtersArticles
  }
}