import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class Comment extends PureComponent {
    render() {
        const { isOpen, comments, onButtonClick } = this.props

        return (
            <div>
                <h4>
                    {comments.user}
                    <button onClick={() => onButtonClick(comments.id)}>{isOpen ? 'close' : 'open'}</button>
                </h4>
                {isOpen && getComment(comments)}
            </div>

        )
    }
}

function getComment(comment) {
    return (
        <section>
            {comment.text}
        </section>
    )
}

Comment.propTypes = {
    isOpen: PropTypes.bool,
    comment: PropTypes.shape({
        user: PropTypes.string,
        text: PropTypes.string
    }),
    onButtonClick: PropTypes.func
}

export default Comment