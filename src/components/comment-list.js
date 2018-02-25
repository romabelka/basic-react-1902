import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comment from './comment';
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array
  }

  static defaultProps = {
    comments: [],
  }

  render() {
    const { comments, isOpen, toggleOpen } = this.props
    // const comments = this.props.comments || [];

    const commentsElements = comments.map(comment =>
      <li key={comment.id}>
        <Comment comment = {comment} />
      </li>
    )
    return (
      <div>
        <button onClick={toggleOpen}>
          {this.getTextButton()}
        </button>
        <ul>
          {isOpen && commentsElements}
        </ul>
      </div>
    )
  }

  getTextButton = () => {
    if (this.props.comments.length === 0) {
      return 'No comments'
    } else {
      return this.props.isOpen ? 'Close comments' : 'Open comments'
    }
  }
}

export default toggleOpen(CommentList)