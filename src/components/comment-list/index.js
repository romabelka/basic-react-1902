import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import { connect } from 'react-redux'
import AddCommentForm from '../add-comment-form'
import toggleOpen from '../../decorators/toggleOpen'
import './style.css'

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
                <button onClick={toggleOpen} className="test__comment-list--btn">{text}</button>
                <CSSTransition
                    transitionName="comments"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                >
                    {this.getBody()}
                </CSSTransition>
            </div>
        )
    }

    getBody() {
        const {comments, isOpen, articleId} = this.props
        if (!isOpen) return null

        return (
            <div className="test__comment-list--body">
                {
                    comments.length
                        ? this.getComments()
                        : <h3 className="test__comment-list--empty">No comments yet</h3>
                }
                <AddCommentForm articleId={articleId}/>
            </div>
        )
    }

    getComments() {
        return (
            <ul>
                {
                    this.props.comments.map(id =>
                        <li key = {id} className = "test__comment-list--item">
                            <Comment id = {id}/>
                        </li>)
                }
            </ul>
        )
    }
}
export default connect((store, {articleId}) => {
    return {
        comments: store.articles[articleId].comments
    }
})(toggleOpen(CommentList))
