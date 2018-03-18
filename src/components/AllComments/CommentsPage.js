import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Comment from '../comment'
import { commentsByPage } from '../../selectors'
import { loadAllcomments } from '../../AC'

class CommentsPage extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.page !== this.props.page) {
      const { comments } = this.props
      this.props.loadAllcomments((nextProps.page - 1)*5, nextProps.page)
    }
  }

  render() {
    const { comments } = this.props
    return(
      <ul>
        {
          comments.map(id =>
            <li key = {id} className = "test__comment-list--item">
                <Comment id = {id}/>
            </li>)
        }
      </ul>
    )
  }
}

CommentsPage.propTypes = {
  comments: PropTypes.array,
}

CommentsPage.defaultProps = {
  comments: [],
}

const mapStateToProps = (state, ownProps) => {
  return {
    comments: commentsByPage(state, ownProps),
  }
}

const mapDispatchToProps = {
  loadAllcomments
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsPage)
