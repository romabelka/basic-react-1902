import {DELETE_ARTICLE, FILTER_DATES, INCREMENT} from '../constants'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: {id}
  }
}

export function filterDates(fromDate, toDate) {
  return {
    type: FILTER_DATES,
    payload: {fromDate, toDate}
  }
}

export function test() {
  return (dispatch) => {
    setTimeout(() => {
      console.log('Some test');
      dispatch(increment());
    }, 5000);
  }
}

