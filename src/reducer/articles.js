import defaultArticles from '../fixtures'
import { DELETE_ARTICLE, FILTER_ARTICLES } from '../constants'
import { DateUtils } from 'react-day-picker'

export default (articlesState = defaultArticles, action) => {
	const {type, payload} = action
	
	switch(type) {
		case DELETE_ARTICLE:
			return articlesState.filter(article => article.id !== payload.id)
		
		case FILTER_ARTICLES:
			return defaultArticles.filter(article => {
				const {selected, range} = payload;
				let result = (selected && selected.length > 0) ? selected.findIndex(s => s.value === article.id) !== -1 : true;
				
				if(!result)
				{
					return false;
				}
				
				if(range.from && new Date(article.date).getTime() < new Date(range.from).getTime()) {
					return false;
				}
				
				if(range.to && new Date(article.date).getTime() > new Date(range.to).getTime()) {
					return false;
				}
				
				return true;
			})
		
		default:
			return articlesState
	}
}