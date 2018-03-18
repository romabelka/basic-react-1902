import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import CommentsPagination from '../comments-pagination'

class CommentsRoute extends Component {

  static propTypes = {};

  render() {
    return (
      <div>
        <h2>Comments page</h2>
        <Route path = {`${this.props.match.path}/:page`} render = {(props) => (
            <CommentsPagination page = {props.match.params.page} />
        )}/>
      </div>
    )
  }

}

export default CommentsRoute
