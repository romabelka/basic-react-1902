import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object
  }

  render() {
    const { comment } = this.props

    return (
      <div>
        <div>User: {comment.user}</div>
        <div>{comment.text}</div>
      </div>
    )
  }
}

export default Comment;