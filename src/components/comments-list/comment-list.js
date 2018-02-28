import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import Comment from './../comment'
import toggleOpen from '../../decorators/toggleOpen'
import CSSTransition from 'react-addons-css-transition-group'

class CommentList extends Component {
    static defaultProps = {
        comments: []
    }

    static propTypes = {
        comments: PropTypes.array.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    render() {
        const {isOpen, toggleOpen} = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                <CSSTransition
                        transitionName = "component"
                        transitionAppear
                        transitionEnterTimeout = {500}
                        transitionLeaveTimeout = {300}
                        transitionAppearTimeout = {1000}
                        component = {Fragment}
                    >
                    <button className = "test__comments--button" onClick={toggleOpen}>{text}</button>
                    {this.getBody()}
                </CSSTransition>
            </div>
        )
    }

    getBody() {
        const {comments, isOpen} = this.props
        if (!isOpen) return null

        const body = comments.length ? (
            <ul>
                {comments.map(comment => <li key = {comment.id} className = "test__comments-list--item"><Comment comment = {comment} /></li>)}
            </ul>
        ) : <h3>No comments yet</h3>

        return (
            <div className="test_comments--body">
                {body}
            </div>
        )
    }
}


export default toggleOpen(CommentList)