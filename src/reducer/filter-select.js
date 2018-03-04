import { SELECT_FILTER } from '../constants' 

export default (filterSelect = [], action) => {
    const { type, payload } = action

    return type === SELECT_FILTER ? payload.selected : filterSelect
}
