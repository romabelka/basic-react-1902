import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'


class CommentItem extends PureComponent {
  render() {
    const { commentData } = this.props

    return(
      <div className='commentItem'>
        <div><strong>Author: </strong>{commentData.user}</div>
        <div><strong>Comment: </strong>{commentData.text}</div>
        <hr/>
      </div>
    )
  }
}

CommentItem.propTypes = {
  commentData: PropTypes.object
}

export  default CommentItem