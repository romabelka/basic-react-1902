import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Comment from '../comment'
import toggleOpen from '../../decorators/toggleOpen'
import CSSTransition from 'react-addons-css-transition-group'
import './style.css'

class CommentList extends Component {
	static defaultProps = {
		comments: []
	}
	
	static propTypes = {
		comments: PropTypes.array.isRequired,
		//from toggleOpen decorator
		isOpen: PropTypes.bool,
		toggleOpen: PropTypes.func
	}
	
	componentDidMount() {
		this.props.fetchData && this.props.fetchData();
	}
	
	render() {
		const {isOpen, toggleOpen} = this.props
		const text = isOpen ? 'hide comments' : 'show comments'
		return (
			<div>
				<button onClick={toggleOpen}>{text}</button>
				{this.getBody()}
			</div>
		)
	}
	
	getBody() {
		const {comments, isOpen} = this.props
		const body = comments.length ? (
			<CSSTransition
				transitionName="comments"
				transitionAppear
				transitionEnterTimeout={500}
				transitionLeaveTimeout={800}
				transitionAppearTimeout={500}
				component={Fragment}
			>
				{isOpen &&
				<ul className="comments">
					{comments.map(comment => <li key={comment.id} className="test__comment-list--item"><Comment comment={comment}/></li>)}
				</ul>
				}
			</CSSTransition>
		) : isOpen && <h3>No comments yet</h3>
		
		return (
			<div className="test-123">
				{body}
			</div>
		)
	}
}

export default toggleOpen(CommentList)