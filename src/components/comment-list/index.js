import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import Comment from '../comment'
import toggleOpen from '../../decorators/toggleOpen'
import CSSTransition from 'react-addons-css-transition-group'

import './style.css'

class CommentList extends Component {
    state = {
        error: null
    }

    static defaultProps = {
        comments: []
    }

    componentDidCatch(error) {
        console.log(error)
        this.setState({error})
    }

    static propTypes = {
        comments: PropTypes.array.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    render() {
        if (this.state.error) return <h2>{this.state.error.message}</h2>

        const {isOpen, toggleOpen} = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return (
            <Fragment>
                <button onClick={toggleOpen} className="comments__button">{text}</button>
                <CSSTransition
                    transitionName = "comments"
                    transitionEnterTimeout = {500}
                    transitionLeave = {false}
                    component = {Fragment}
                >
                    {this.getBody()}
                </CSSTransition>
            </Fragment>
        )
    }

    getBody() {
        const {comments, isOpen} = this.props
        if (!isOpen) return null

        const body = comments.length ? (
            <ul className="comments-list">
                {comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)}
            </ul>
        ) : <h3>No comments yet</h3>

        return (
            <div>
                {body}
            </div>
        )
    }
}


export default toggleOpen(CommentList)
