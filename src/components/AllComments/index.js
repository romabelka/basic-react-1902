import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Comment from '../comment'
import { loadAllcomments } from '../../AC'

class AllComments extends React.Component {
  componentWillMount() {
    this.props.loadAllcomments(this.props.match.params.count, 0)
  }

  render() {
    return(
      <h1>{this.props.match.params.count}</h1>
    )
  }
}

AllComments.propTypes = {
  match: PropTypes.object
}

const mapDispatchToProps = {
  loadAllcomments
}

export default connect(null, mapDispatchToProps)(AllComments)
