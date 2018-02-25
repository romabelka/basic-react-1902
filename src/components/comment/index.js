import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Collapse from 'decorators/collapse'

import './style.css'

class Comment extends Component {
  render() {
    const {
      dataComment,
      toggleItem,
      isOpen,
    } = this.props

    console.log('render', isOpen)

    return (
      <div>
        <div className="comment-link" onClick={toggleItem}>{dataComment.user}</div>
        {
          isOpen &&
          <div>
            {dataComment.text}
          </div>
        }
      </div>
    )
  }
}

Comment.propTypes = {
  dataComment: PropTypes.object.isRequired,
  toggleItem: PropTypes.func,
  isOpen: PropTypes.bool,
}
Comment.defaultProps = {}

export default Collapse(Comment)
