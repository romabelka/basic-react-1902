import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'


class Comment extends PureComponent {

    static propTypes = {
        comment: PropTypes.shape({
            id: PropTypes.string.isRequired,
            user: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        }).isRequired,
        isOpen: PropTypes.bool.isRequired,
        onToggleCommentClick: PropTypes.func
    }

    render() {
        const commentTextElement = this.props.isOpen ? <div>{this.props.comment.text}</div> : '';

        return (
            <li>
                <h3>User: {this.props.comment.user}</h3>
                <button onClick={() => this.props.onToggleCommentClick(this.props.comment.id)}>{this.props.isOpen ? 'Close': 'Open'}</button>
                {commentTextElement}
            </li>
        )
    }
}

export default Comment