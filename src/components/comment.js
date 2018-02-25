import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class Comment extends PureComponent {
    render() {
        const { comment } = this.props
        console.log('---', 1)
        return (
            <div>
                <h2>
                    {comment.title}

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
    isOpen: PropTypes.bool,
    comment: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string
    }).isRequired,
    onButtonClick: PropTypes.func
}

export default Comment