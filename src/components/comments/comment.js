import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
  static propTypes = {

  }

  render(){
    const {comment: {user, text} } = this.props
    return(
      <div>
        <p className="comment-elem__author">{user}</p>
        <p className="comment-elem__text">{text}</p>
      </div>
    )
  }
}

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.isRequired,
    user: PropTypes.string,
    text: PropTypes.string.isRequired,
  }).isRequired
}

export default Comment
