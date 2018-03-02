import { DATE_RANGE, SELECT_ARTICLE } from '../constants'

const defaultFiltersState = {
  dateRange: { start: null, end: null },
  selectedArticles: []
}

export default (filtersState = defaultFiltersState, action) => {
  const { type, payload } = action

  switch (type) {
      case DATE_RANGE:
          return  { ...filtersState, dateRange: payload }

      case SELECT_ARTICLE:
          return { ...filtersState, selectedArticles: payload }

      default:
          return filtersState
  }
}
