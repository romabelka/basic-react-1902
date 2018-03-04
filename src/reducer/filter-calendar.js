import { UPDATE_CALENDAR } from '../constants' 

export default (range = {from: null, to: null} , action) => {
    const { type, payload } = action

    return type === UPDATE_CALENDAR ? payload.range : range
}
