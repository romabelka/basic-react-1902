import  React, {Component} from 'react'
import PropTypes from 'prop-types'

class CommentsList extends Component {
    render () {
        const {comments, toggleFlag} = this.props
        if (typeof comments === 'undefined' || !toggleFlag) return <div/>

        const commentElements = comments.map(comment =>
             <li key={comment.id}>
                 <b>{comment.user}:</b> {comment.text}
             </li>
        )

        return (
            <div>
                <ul>
                    {commentElements}
                </ul>
            </div>
        )
    }
}

CommentsList.propTypes = {
    comments: PropTypes.array,
    toggleFlag: PropTypes.bool
}

export default CommentsList

