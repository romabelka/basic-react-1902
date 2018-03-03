import { CHANGE_SELECTED } from '../constants'

export default (selectState = null, action) => {
    const { type, payload } = action

    return type === CHANGE_SELECTED ? payload.selected : selectState
}
