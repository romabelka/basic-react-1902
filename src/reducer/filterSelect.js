import { UPDATE_FILTER_SELECT, DELETE_ARTICLE } from '../constants'

const defaultState = []

export default (state = defaultState, action) => {
  const { type, payload } = action

  switch (type) {
    case UPDATE_FILTER_SELECT:
      return payload
    case DELETE_ARTICLE:
      return state.filter(filterElem => filterElem.value !== payload.id)
    default:
      return state
  }
}
