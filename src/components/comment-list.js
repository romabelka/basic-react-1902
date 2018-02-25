import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './comment'
import commentsdecorator from '../decorators/commentsdecorator'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,

        //from commentsdecorator decorator
        openItemId: PropTypes.string,
        toggleItem: PropTypes.func
    };

    state = {
        isOpen: null
    }

    render() {
        const { comments } = this.props
        if (!comments) return null
        const commentElements = comments.map(comment =>
            <li key = {comment.id}>
                <Comment
                    comment = {comment}
                />
            </li>
        )
        const commentElementsList = <ul>{commentElements}</ul>
        return (
            <div>
                <button onClick={this.toggleClick.bind(this)}>{this.state.isOpen ? 'toggleclose' : 'toggleopen'}</button>
                {this.state.isOpen && commentElementsList}
            </div>
        )
    }
    toggleClick = () => this.setState({ isOpen: !this.state.isOpen })
    // setContainerRef = containerRef => console.log(containerRef)
}

export default commentsdecorator(CommentList)