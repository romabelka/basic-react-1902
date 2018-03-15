import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import CommentForm from '../comment-form'
import toggleOpen from '../../decorators/toggleOpen'
import Loader from '../loader'
import './style.css'

class CommentList extends Component {

    static propTypes = {
        article: PropTypes.object.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    componentWillReceiveProps({isOpen, comments, article: {id}}) {
        if (!this.props.isOpen && isOpen && !comments) this.props.loadCommenstById(id)
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
        const {article: {id}, isOpen, comments} = this.props
        if (!isOpen || !comments) return null
        if (comments && comments.get('loading')) return <Loader/>

        return (
            <div className="test__comment-list--body">
                {
                    comments.get('articleComments')
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
                    this.props.comments.get('articleComments').toJS().map(comment => (
                        <li key = {comment.id} className = "test__comment-list--item">
                            <Comment comment = {comment}/>
                        </li>
                    ))
                }
            </ul>
        )
    }
}


export default toggleOpen(CommentList)