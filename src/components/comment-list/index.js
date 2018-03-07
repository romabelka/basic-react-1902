import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import toggleOpen from '../../decorators/toggleOpen'
import { getCommentsByArticle } from '../../selectors'
import { createComment } from '../../AC'
import './style.css'

class CommentList extends Component {
    static defaultProps = {
        comments: []
    }

    static propTypes = {
        comments: PropTypes.array.isRequired,
        articleId: PropTypes.string,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func,
        createComment: PropTypes.func,
    }

    state = {
      user: '',
      message: '',
    }

    handleOnSubmit = event => {
      event.preventDefault()
      const { createComment, articleId } = this.props
      const { user, message } = this.state

      if (user && message) {
        createComment(articleId, user, message)
      }

      this.setState({
        user: '',
        message: ''
      })
    }

    handleOnChange = (event, field) => {
      this.setState({ [field]: event.target.value })
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
        const {comments, isOpen} = this.props
        const { user, message } = this.state
        if (!isOpen) return null

        return (
            <div className="test__comment-list--body">
                <form>
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      value={user}
                      onChange={(event) => this.handleOnChange(event, 'user')}
                    />
                  </div>
                  <div>
                    <textarea
                      rows="10"
                      cols="30"
                      value={message}
                      placeholder="Text"
                      onChange={(event) => this.handleOnChange(event, 'message')}
                    />
                  </div>
                  <div>
                    <button onClick={this.handleOnSubmit} >Submit</button>
                  </div>
                </form>
                {
                    comments.length
                        ? this.getComments()
                        : <h3 className="test__comment-list--empty">No comments yet</h3>
                }
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

const mapStateToProps = (state, ownProps) =>({
  comments: getCommentsByArticle(state, ownProps)
})

const mapDispatchToProps = {
  createComment
}


export default connect(mapStateToProps, mapDispatchToProps)(toggleOpen(CommentList))
