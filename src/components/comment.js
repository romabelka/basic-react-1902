import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class Comment extends PureComponent {
    render() {
        const { comment } = this.props
        return (
            <div>
                <h2>
                    {comment.user}

                </h2>
                {getBody(comment)}
            </div>
        )
    }
}

function getBody(comment) {
    return (
        <section>
            {comment.text}
        </section>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        user: PropTypes.string,
        text: PropTypes.string
    }).isRequired
}

export default Comment