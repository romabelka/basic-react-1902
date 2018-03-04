import { UPDATE_FILTER_SELECT } from '../constants'

const defaultState = []

export default (state = defaultState, action) => {
    const { type, payload } = action

    switch (type) {
        case UPDATE_FILTER_SELECT:
            return payload
        default:
            return state
    }
}
