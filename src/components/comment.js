import React from "react";
import PropTypes from "prop-types";


class Comment extends React.Component {

    render() {
        const {comment} = this.props
        return (
            <div>
                <h3>{comment.user}</h3>
                <span>{comment.text}</span>
            </div>
        )
    }
}

Comment.propTypes = {
    comment: PropTypes.object
}

export default Comment;