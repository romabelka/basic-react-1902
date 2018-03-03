import { CHANGE_RANGE } from '../constants'

const default_range = {
  from: null,
  to: null
}

export default (daterangeState = default_range, action) => {
    const { type, payload } = action

    return type === CHANGE_RANGE ? payload.range : daterangeState
}
