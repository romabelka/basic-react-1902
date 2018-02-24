import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Comment extends PureComponent {
	static propTypes = {
		comment: PropTypes.shape({
			id: PropTypes.string.isRequired,
			user: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired
		})
	};
	
	render() {
		const {id, user, text} = this.props.comment;
		return (
			<div id={id}>
				<strong>{user}</strong>
				<p>{text}</p>
			</div>
		);
	}
}

export default Comment;