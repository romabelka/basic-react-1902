import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import {connect} from 'react-redux'
import Comment from '../comment'
import CommentForm from '../comment-form'
import Loader from '../loader'
import toggleOpen from '../../decorators/toggleOpen'
import { translate } from '../../decorators/translation'
import {loadArticleComments} from '../../AC'
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

    static contextTypes = {
        store: PropTypes.object,
        router: PropTypes.object,
        user: PropTypes.string
    }

    componentWillReceiveProps({ isOpen, article, loadArticleComments }) {
        if (!this.props.isOpen && isOpen && !article.commentsLoading && !article.commentsLoaded) {
            loadArticleComments(article.id)
        }
    }

    render() {
        const {isOpen, toggleOpen, __ } = this.props
        console.log('---', 'rendering CommentList')
        const text = isOpen ? __('hide comments') : __('show comments')
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
        const {article: { comments, id, commentsLoading, commentsLoaded }, isOpen} = this.props
        if (!isOpen) return null
        if (commentsLoading) return <Loader />
        if (!commentsLoaded) return null

        return (
            <div className="test__comment-list--body">
                <h3>{this.context.user}</h3>
                {
                    comments.length
                        ? this.getComments()
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
                    this.props.article.comments.map(id =>
                        <li key = {id} className = "test__comment-list--item">
                            <Comment id = {id}/>
                        </li>)
                }
            </ul>
        )
    }
}


export default connect(null, { loadArticleComments }, null, { pure: false })(toggleOpen(translate(CommentList)))
