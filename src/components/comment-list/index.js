import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import CommentAddForm from '../comment/comment-add'
import toggleOpen from '../../decorators/toggleOpen'
import './style.css'

class CommentList extends Component {
    static defaultProps = {
        comments: []
    }

    static propTypes = {
        comments: PropTypes.array.isRequired,
        articleId: PropTypes.string.isRequired,

        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }


    render() {
        console.log('render comments list');
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
        const {comments, isOpen} = this.props

        if (!isOpen) return null

        return (
            <div className="test__comment-list--body">
                {
                    comments.length
                        ? this.getComments()
                        : <h3 className="test__comment-list--empty">No comments yet</h3>
                }
                <CommentAddForm articleId = {this.props.articleId} />
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


export default connect((state, { articleId }) => {
    return {
        comments: state.articles[articleId].comments
    }
})(toggleOpen(CommentList))
