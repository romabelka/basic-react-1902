import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
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

    state = {
        textIsEmpty: true,
        nameIsEmpty: true
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

    handeChangeName = (e) => {
        e.target.value.trim().length ? this.setState({ nameIsEmpty: false }) : this.setState({ nameIsEmpty: true })
    }

    handeChangeText = (e) => {
        e.target.value.trim().length ? this.setState({ textIsEmpty: false }) : this.setState({ textIsEmpty: true })
    }

    handleAddComment = () => {
        const { addComment } = this.props
        const { commentName, commentText } = this.refs
        //addComment(commentName.value, commentText.value)
    }

    getBody() {
        const {comments, isOpen, addComment} = this.props

        if (!isOpen) return null

        return (
            <div className="test__comment-list--body">
                {
                    comments.length
                        ? this.getComments()
                        : <h3 className="test__comment-list--empty">No comments yet</h3>
                }
                <div>
                    <p><b>Добавить комментарий:</b></p>
                    <input
                        type="text"
                        ref="commentName"
                        className="comments-list__name"
                        placeholder="Ваше имя"
                        onChange = { this.handeChangeName }
                    />
                    <textarea
                        placeholder="Текст комментария"
                        className="comments-list__text"
                        ref="commentText"
                        onChange = { this.handeChangeText }
                        >
                    </textarea>
                    <button
                        className="comments-list__add"
                        onClick = { this.handleAddComment }
                        disabled = { this.state.textIsEmpty || this.state.nameIsEmpty }
                        >
                        Добавить
                    </button>
                </div>
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


export default toggleOpen(CommentList)
