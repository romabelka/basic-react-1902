import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import accordion from '../decorators/accordion'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            user: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })).isRequired,

        //from accordion decorator
        openItemId: PropTypes.string,
        toggleItem: PropTypes.func
    };

    render() {
        const { comments, openItemId, toggleItem } = this.props
        
        const commentElements = comments.map(comment => 
            <Comment 
                key = {comment.id} 
                comment = {comment} 
                isOpen = {openItemId === comment.id} 
                onToggleCommentClick = {toggleItem} />
        );
        return <ul>{commentElements}</ul>
    }
}

export default accordion(CommentList)