import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
<<<<<<< HEAD
import CommentAddForm from '../comment/comment-add'
=======
import CommentForm from '../comment-form'
>>>>>>> upstream/master
import toggleOpen from '../../decorators/toggleOpen'
import './style.css'

class CommentList extends Component {
    static defaultProps = {
        comments: []
    }

    static propTypes = {
<<<<<<< HEAD
        comments: PropTypes.array.isRequired,
        articleId: PropTypes.string.isRequired,

=======
        article: PropTypes.object.isRequired,
>>>>>>> upstream/master
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
<<<<<<< HEAD
        const {comments, isOpen} = this.props

=======
        const {article: { comments, id }, isOpen} = this.props
>>>>>>> upstream/master
        if (!isOpen) return null

        return (
            <div className="test__comment-list--body">
                {
                    comments.length
                        ? this.getComments()
                        : <h3 className="test__comment-list--empty">No comments yet</h3>
                }
<<<<<<< HEAD
                <CommentAddForm articleId = {this.props.articleId} />
=======
                <CommentForm articleId = {id} />
>>>>>>> upstream/master
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


export default toggleOpen(CommentList)
