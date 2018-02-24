import React, { Component } from 'react';

class Comment extends Component {
	render() {
		const {comment } = this.props
		return (
			<div>
				<p>Автор: <b>{comment.user}</b></p>
				<p>{comment.text}</p>
			</div>
		);
	}
}

export default Comment;