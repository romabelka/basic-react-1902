import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import Comment from '../comment/index'
import toggleOpen from '../../decorators/toggleOpen'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './style.css';

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
                <button onClick={toggleOpen} className="test__comments--button">{text}</button>
                <ReactCSSTransitionGroup
                  transitionName="comment"
                  transitionEnterTimeout={700}
                  transitionLeaveTimeout={500}
                  component={Fragment}
                >
                    {this.getBody()}
                </ReactCSSTransitionGroup>
            </div>
        )
    }

    getBody() {
        const {comments, isOpen} = this.props
        if (!isOpen) return null

        const body = comments.length ? (
            <ul className="test__comments--list">
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
