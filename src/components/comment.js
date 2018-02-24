import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class Comment extends PureComponent {
    render() {
        const { comment } = this.props;

        return (
            <div>
                <h2>
                    {comment.user}
                </h2>
                <p>
                    {comment.text}
                </p>
            </div>
        )
    }
}

Comment.propTypes = {
    comment: PropTypes.shape({
        user: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired,
};

export default Comment
