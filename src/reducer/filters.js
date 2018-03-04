import {SELECT_ARTICLE, SET_DATE_RANGE} from "../constants";

const initState = {
    selectedArticles:[],
    startDate:null,
    endDate:null,
    dateRange:{
        from:null,
        to:null
    }

}

export default (state = initState, action)=>{
    switch (action.type){
        case SELECT_ARTICLE:
            return {...state,selectedArticles:action.payload.selected}
        case SET_DATE_RANGE:
            return {...state,dateRange:action.payload.dateRange}
        default:
            return state;
    }
}