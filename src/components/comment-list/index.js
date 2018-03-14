import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import CommentForm from '../comment-form'
import Loader from '../loader'
import toggleOpen from '../../decorators/toggleOpen'
import './style.css'

import { connect } from 'react-redux'
import { loadCommentsById } from '../../AC'

class CommentList extends Component {
    static defaultProps = {
        comments: []
    }

    static propTypes = {
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }


    componentWillReceiveProps({ isOpen, loadCommentsById, article}) {
        if (!this.props.isOpen && isOpen && !this.props.loaded)
          loadCommentsById(article.id)
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
        const {article: { comments, id }, isOpen} = this.props
        if (!isOpen) return null

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
        if (this.props.loading) return  <Loader/>

        return (
            <ul>
                {
                    this.props.comments.map(comment =>
                        <li key = {comment.id} className = "test__comment-list--item">
                            <Comment comment = {comment}/>
                        </li>)
                }
            </ul>
        )
    }
}

const mapStateToProps = state => ({
    comments: state.comments.get('entities'),
    loading: state.comments.get('loading'),
    loaded: state.comments.get('loaded')
})

export default connect(mapStateToProps, { loadCommentsById })(toggleOpen(CommentList))
