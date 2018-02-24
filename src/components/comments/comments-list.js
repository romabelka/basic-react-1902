import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Comment from './comment'
import toggle from '../../decorators/toggle'
import './style.css'

class CommentsList extends PureComponent {
  static propTypes = {
    comments: PropTypes.array.isRequired,

    //from toggle decorator
    openFlag: PropTypes.bool
  }

  render(){
    const { comments, openFlag, toggleOpen } = this.props
    return(
      <div>
        <button onClick = {toggleOpen} className = "comments__button"> {openFlag ? 'close comments' : 'open comments'} </button>
        <ul className = {openFlag ? 'comments' : 'comments hidden'} >
          <h3 className="comments__title">Comments:</h3>
          {openFlag ? this.getCommentElems(comments) : ''}
        </ul>
      </div>
    )
  }

  getCommentElems(comments) {
    return comments.map(comment =>
      <li className = "comment-elem" key = {comment.id}>
        <Comment comment = {comment} />
      </li>
    )
  }

}

export default toggle(CommentsList)
