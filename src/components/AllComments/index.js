import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import Comment from '../comment'

class AllComments extends React.Component {
  render() {
    return(
      <h1>{this.props.match.params.count}</h1>
    )
  }
}

AllComments.propTypes = {
  match: PropTypes.object
}

export default AllComments
