import { UPDATE_FILTER_DATE } from '../constants'
const defaultState = {
    from: null,
    to: null
}

export default (state = defaultState, action) => {
    const { type, payload } = action

    switch (type) {
        case UPDATE_FILTER_DATE:
            return payload
        default:
            return state
    }
}
