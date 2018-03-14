import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import CommentForm from '../comment-form'
import toggleOpen from '../../decorators/toggleOpen'
import { loadCommentsByArticle } from '../../AC'
import { createCommentSelector, loadingCommentsSelector } from '../../selectors'
import Loader from '../loader'
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

    componentWillReceiveProps({ isOpen }) {
      if (!this.props.isOpen && isOpen) this.props.loadCommentsByArticle(this.props.article.id)
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
        const {article: { comments, id }, isOpen, loading} = this.props
        if (!isOpen) return null
        if (loading){
          return <Loader/>
        }

        return (
            <div className="test__comment-list--body">
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

const mapStateToProps = state => {
  return {
    loading: loadingCommentsSelector(state)
  }
}

const mapDispatchToProps = {
  loadCommentsByArticle
}

export default connect(mapStateToProps, mapDispatchToProps)(toggleOpen(CommentList))
