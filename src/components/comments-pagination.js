import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { loadPageComments } from '../AC'
import Loader from './loader'
import Comment from './comment'

class CommentsPagination extends Component {

    componentWillMount() {
        const {loading, comments, loadPageComments, page} = this.props
        if (!comments && !loading) loadPageComments(page)
    }

    componentWillReceiveProps( {loading, comments, loadPageComments, page}) {
        if (!comments && !loading) loadPageComments(page)
    }

    render() {
        const { total } = this.props

        if (!total) return <Loader />

        return (
            <div>
                {this.renderComments()}
                {this.renderPagination()}
            </div>
        )
    }

    renderComments() {
        const {loading, comments} = this.props
        if (loading || !comments) return <Loader />
        return(
            <ul>
                {comments.map(id => <li key={id}><Comment id={id}/></li>)}
            </ul>
        )
    }

    renderPagination() {
        const { total } = this.props
        return (
            <ul>
                {Array.from({ length: Math.ceil(total / 5) }, (_, k) => k + 1).map(i =>
                    <li key={i}><NavLink to = {`/comments/${i}`} activeStyle = {{ color: 'red' }}>{i}</NavLink></li>
                )}
            </ul>
        )
    }

}

export default connect((state, { page }) => {
    const { total, pagination } = state.comments
    return {
        total,
        loading: pagination.getIn([page, 'loading']),
        comments: pagination.getIn([page, 'ids'])
    }
}, { loadPageComments })(CommentsPagination)
