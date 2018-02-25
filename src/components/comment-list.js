import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './commet'
import accordion from '../decorators/accordion'

class CommentsList extends Component {
    static propTypes = {
        comment: PropTypes.array,
        openItemId: PropTypes.string,
        toggleItem: PropTypes.func
    }
    
    render() {
        const { comments, openItemId, toggleItem } = this.props
        const commentElement = comments.map(comments =>
            <li key = {comments.id}>
                <Comment
                    comments = {comments}
                    onButtonClick = {toggleItem}
                    isOpen = {openItemId === comments.id}
                />
            </li>
        )

        return (
            <section>
                <h3>Comments:</h3>
                <ul ref = {this.setContainerRef}>
                    {commentElement}
                </ul>
            </section>
        )
    }

    setContainerRef = containerRef => console.log(containerRef)
}

export default accordion(CommentsList)