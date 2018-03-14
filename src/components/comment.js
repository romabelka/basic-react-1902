import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createCommentSelector } from '../selectors'
import Loader from './loader'

function Comment({comment}) {
    if (!comment.text) return <Loader/>

    return (
        <div>
            {comment.text} <b>by {comment.user}</b>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        user: PropTypes.string
    })
}

const createMapStateToProps = () => {
    const commentSelector = createCommentSelector()

    return (state, ownProps) => ({
            comment: commentSelector(state, ownProps) || {}
    })
}


export default connect(createMapStateToProps)(Comment)