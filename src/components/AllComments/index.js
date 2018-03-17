import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Comment from '../comment'
import { loadAllcomments } from '../../AC'
import { allCommentsSelector, totalComments } from '../../selectors'

class AllComments extends React.Component {
  componentWillMount() {
    this.props.loadAllcomments(this.props.match.params.count, 4)
  }

  renderButtons = total => {
    const count = new Array(Math.ceil(total / 5)).fill(null)
    return count.map((_, index) => (
      <button>{index + 1}</button>))
  }

  render() {
    const { comments, total } = this.props
    return(
      <div>
        <h1>{this.props.match.params.count}</h1>
        <ul>
          {
            comments.map(id =>
              <li key = {id} className = "test__comment-list--item">
                  <Comment id = {id}/>
              </li>)
          }
        </ul>
        {this.renderButtons(total)}
      </div>
    )
  }
}

AllComments.propTypes = {
  match: PropTypes.object,
  comments: PropTypes.array
}

AllComments.defaultProps = {
  comments: []
}

const mapStateToProps = state => {
  return {
    comments: allCommentsSelector(state),
    total: totalComments(state)
  }
}

const mapDispatchToProps = {
  loadAllcomments
}

export default connect(mapStateToProps, mapDispatchToProps)(AllComments)
