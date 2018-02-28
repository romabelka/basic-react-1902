import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comment from './../comment'
import toggleOpen from '../../decorators/toggleOpen'
import CSSTransition from 'react-addons-css-transition-group'
import "./style.css"

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
                <button className="test__comment-list--button" onClick={toggleOpen}>{text}</button>
                <CSSTransition
                    transitionName="comment-list"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                    component="div">
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
                {comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)}
            </ul>
        ) : <h3>No comments yet</h3>

        return (
            <div className={"test__comment-list--body"}>
                {body}
            </div>
        )
    }
}


export default toggleOpen(CommentList)