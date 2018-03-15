import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import CommentForm from '../comment-form'
import toggleOpen from '../../decorators/toggleOpen'
import Loader from '../loader'
import {loadingCommentsSelector, commentsMapSelector} from '../../selectors'
import { connect } from 'react-redux'
import { loadCommentsByArticleId } from '../../AC'
import './style.css'

class CommentList extends Component {
    static defaultProps = {
        comments: []
    }

    static propTypes = {
        article: PropTypes.object.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    componentWillReceiveProps({ isOpen, loadCommentsByArticleId, article, comments }) {
        if (!this.props.isOpen && isOpen) {
            loadCommentsByArticleId(article.id)
            console.log("!!!" + comments)
        }
    }
   /* componentDidMount() {
        console.log(this.props)//loadCommentsByArticleId
    }*/
    render() {
        const {isOpen, toggleOpen, loading} = this.props
        if (loading) return <Loader />
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
        const {article: { id }, comments, commentsMap, isOpen} = this.props
        if (!isOpen) return null

        const commentElements = commentsMap.toSeq(id =>
            <li key = {id} className = "test__comment-list--item">
                <Comment id = {id}/>
            </li>
        )
        return (
            <div className="test__comment-list--body">
                {
                    commentsMap.size
                        ? <ul>
                        {
                            commentElements
                        }
                    </ul>
                        : <h3 className="test__comment-list--empty">No comments yet</h3>
                }
                <CommentForm articleId = {id} />
            </div>
        )
    }

    getComments() {
        return (
            <ul>
                {
                    this.props./*article.*/comments.map(id =>
                        <li key = {id} className = "test__comment-list--item">
                            <Comment id = {id}/>
                        </li>)
                }
            </ul>
        )
    }
}


export default connect(state => ({
    comments: state.comments,
    commentsMap: commentsMapSelector(state),
    loading: loadingCommentsSelector(state)
}), { loadCommentsByArticleId })(toggleOpen(CommentList))