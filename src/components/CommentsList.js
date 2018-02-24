import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Comment from './Comment'
import accordion from '../decorators/accordion'

class CommentsList extends Component {
	static propTypes = {
		comments: PropTypes.array.isRequired,
		onButtonClick: PropTypes.func,
		isOpen: PropTypes.bool,
		listId: PropTypes.string,

		//из декоратора
		openItemId: PropTypes.string,
		toggleItem: PropTypes.func
	}
	
	render() {
		console.log(this.props)
		const {listId, isOpen, onButtonClick} = this.props
		return (
			<div>
				<hr/>
				<div>Комментарии: {this.getCommentsTotal()}</div>
				<button 
					onClick={ () => (isOpen ? onButtonClick(null) : onButtonClick(listId)) }  > {isOpen ? 'Скрыть комментарии' : 'Показать комментарии'}
				</button>
				<hr/>
				{isOpen && this.getBody()}
			</div>
		);
	}
	getBody() {
		const {comments} = this.props
		if (!comments || !comments.length) {
			return <div>Пока нет комментариев</div>
		} else {
			return (
				<ul>
					{comments.map(comment => <li key = {comment.id}><Comment comment = {comment}/> </li>
					)}
				</ul>
			)
		}
	}
	getCommentsTotal() {
		const {comments} = this.props
		if (!comments || !comments.length) {
			return "0"
		} else {
			return comments.length
		}
	}
}

export default accordion(CommentsList);
