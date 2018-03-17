import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Comment from '../comment'
import { loadAllcomments } from '../../AC'
import { allCommentsSelector } from '../../selectors'

class AllComments extends React.Component {
  componentWillMount() {
    this.props.loadAllcomments(this.props.match.params.count, 4)
  }

  render() {
    const { comments } = this.props
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
    comments: allCommentsSelector(state)
  }
}

const mapDispatchToProps = {
  loadAllcomments
}

export default connect(mapStateToProps, mapDispatchToProps)(AllComments)
