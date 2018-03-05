import { INCREMENT, DELETE_ARTICLE, SET_FILTER, FILTER_ARTICLES } from '../constants'

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

export function setFilter(selected, range) {
	return {
		type: SET_FILTER,
		payload: {
			selected,
			range
		}
	}
}

export function filterArticles(selected, range) {
	return {
		type: FILTER_ARTICLES,
		payload: {
			selected,
			range
		}
	}
}