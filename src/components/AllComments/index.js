import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Comment from '../comment'
import { loadAllcomments } from '../../AC'
import { allCommentsSelector, totalComments } from '../../selectors'

class AllComments extends React.Component {
  componentWillMount() {
    this.props.loadAllcomments(this.props.match.params.count, 0)
  }

  handlePageButton = () => {
    this.props.loadAllcomments(this.props.match.params.count, this.props.comments.length)
  }

  renderButtons = (total, pages) => {
    const count = new Array(Math.ceil(total / pages)).fill(null)
    return count.map((_, index) => (
      <button
        key={`button-page-${index + 1}`}
        onClick={this.handlePageButton}
      >
        {index + 1}
      </button>))
  }

  render() {
    const { comments, total, count } = this.props
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
        {this.renderButtons(total, count)}
      </div>
    )
  }
}

AllComments.propTypes = {
  match: PropTypes.object,
  comments: PropTypes.array,
  count: PropTypes.string
}

AllComments.defaultProps = {
  comments: []
}

const mapStateToProps = (state, ownProps) => {
  return {
    comments: allCommentsSelector(state),
    total: totalComments(state),
    count: ownProps.match.params.count
  }
}

const mapDispatchToProps = {
  loadAllcomments
}

export default connect(mapStateToProps, mapDispatchToProps)(AllComments)
