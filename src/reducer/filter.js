import { UPDATE_FILTER_DATE, UPDATE_FILTER_SELECT, DELETE_ARTICLE } from '../constants'

const defaultState = {
  date: { from: null, to: null },
  select: []
}

export default (state = defaultState, action) => {
  const { type, payload } = action

  switch (type) {
    case UPDATE_FILTER_DATE:
      return {
        ...state,
        date: payload
      }
    case UPDATE_FILTER_SELECT:
      return {
        ...state,
        select: payload
      }
    case DELETE_ARTICLE:
      return {
        ...state,
        select: state.select.filter(filterElem => filterElem.value !== payload.id)
      }
    default:
      return state
  }
}
