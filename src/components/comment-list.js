import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './comment'
import accordion from '../decorators/accordion'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array.isRequired,
        openItemId: PropTypes.string,
        toggleItem: PropTypes.func
    };

    render() {
        const { comments, openItemId, toggleItem } = this.props

        const commentElements = comments.map(comment =>
            <li key = {comment.id}>
                <Comment
                    comment = {comment}
                    onButtonClick = {toggleItem}
                    isOpen = {openItemId === comment.id}
                />
            </li>
        )
        return (
            <ul>
                {commentElements}
            </ul>
        )
    }
}

export default accordion(CommentList)