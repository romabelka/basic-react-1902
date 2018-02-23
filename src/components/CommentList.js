import React, { Component } from 'react'
import PropTypes from 'prop-types'
import accordion from '../decorators/accordion'

class CommentList extends Component {
  renderComments = comment => (
    <li key={comment.id}>
     <h6>{comment.user}</h6>
     <p>{comment.text}</p>
    </li>
  )

  render() {
    const { comments, show, showItem } = this.props

    return(
      <div>
        <button onClick={showItem} >{`${show ? "Hide" : "Show"} Commentaries`}</button>
        <ul>
        {show && comments.map(this.renderComments)}
        </ul>
      </div>
    )
  }
}

CommentList.propTypes = {
  comments: PropTypes.array,
  show: PropTypes.bool.isRequired,
  showItem: PropTypes.func.isRequired
}

CommentList.defaultProps = {
  comments: []
}

export default accordion(CommentList)
