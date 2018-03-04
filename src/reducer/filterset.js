import { FILTER_SET_DATE, FILTER_SET_SELECT } from '../constants'

export default (filterState = {from: null, to: null, selected: null}, action) => {

    const { type, payload } = action
    switch (type){
        case FILTER_SET_SELECT:
            filterState.selected = payload
            break
        case FILTER_SET_DATE:
            filterState.from = payload.from
            filterState.to = payload.to
            break
        default:
    }
    return filterState
}
