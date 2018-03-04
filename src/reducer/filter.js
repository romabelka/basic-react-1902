import { CHANGE_DATE_RANGE } from '../constants'
const initialState = {
    range: {
        from: null,
        to: null
    }
};

export default (state = initialState, action) => {
    const { type, payload } = action
    
    switch (type) {
        case CHANGE_DATE_RANGE:
            return {...state, range: payload.range}           
        default:
            return state
    }
}

