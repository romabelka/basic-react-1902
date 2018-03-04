import {FILTER_DATES} from '../constants';

export default (state = {fromDate: null, toDate: null}, action) => {
  let {type} = action;

  switch (type) {
    case FILTER_DATES:
      let {payload: {fromDate, toDate}} = action;
      return {...state, fromDate, toDate};
    default:
      return state;
  }
}
