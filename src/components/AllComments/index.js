import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Comment from '../comment'
import CommentsPage from './CommentsPage'
import { loadAllcomments } from '../../AC'
import { allCommentsSelector, totalComments } from '../../selectors'

class AllComments extends React.Component {

  componentDidMount() {
    this.props.loadAllcomments(0, "1")
  }

  renderButtons = total => {
    const count = new Array(Math.ceil(total / 5)).fill(null)
    return count.map((_, index) => (
      <NavLink to={`/comments/${index + 1}`} key={`button-page-${index + 1}`} >
        <button>{index + 1}</button>
      </NavLink>
      ))
  }

  render() {
    const { total, match } = this.props
    return(
      <div>
        <Route path = {`${match.path}/:page`} children = {this.getCommentsPage}/>
        {this.renderButtons(total)}
      </div>
    )
  }

  getCommentsPage = ({ match }) => {
    if (!match) {
      return <CommentsPage page={"1"} />
    }
    return <CommentsPage page={match.params.page} />
  }
}

AllComments.propTypes = {
  match: PropTypes.object,
  total: PropTypes.number
}

const mapStateToProps = (state, ownProps) => {
  return {
    total: totalComments(state),
  }
}

const mapDispatchToProps = {
  loadAllcomments
}

export default connect(mapStateToProps, mapDispatchToProps)(AllComments)
