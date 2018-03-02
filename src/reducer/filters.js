import { DATE_RANGE, SELECT_ARTICLE } from '../constants'

export const defaultFiltersState = {
  dateRange: { from: null, to: null },
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
