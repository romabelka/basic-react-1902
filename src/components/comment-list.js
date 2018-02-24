import React, { Component } from "react";
import PropTypes from "prop-types";
import Comment from "./comment";
import list from "../decorators/list";

class CommentList extends Component {
	static propTypes = {
		comments: PropTypes.array
	};
	
	render() {
		const {comments} = this.props;
		const commentElements = comments.map(comment =>
			<li key={comment.id}>
				<Comment
					comment={comment}
				/>
			</li>
		);
		
		return (
			<div>
				<h3>
					Комментарии
					<button onClick={this.props.toggleItem}>{this.props.isOpen ? "hide" : "show"}</button>
				</h3>
				{
					this.props.isOpen &&
					<ul>
						{commentElements}
					</ul>
				}
			</div>
		);
	}
}

export default list(CommentList);