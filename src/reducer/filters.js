import { SET_FILTER } from "../constants";

export default (filtersDefault = {range: {from: null, to: null}, selected: null}, action) => {
	const {type, payload} = action
	
	switch(type) {
		case SET_FILTER:
			return {
				selected: payload.selected,
				range: payload.range
			}
			
		default:
			return filtersDefault;
	}
}