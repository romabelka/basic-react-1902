import React, { PropTypes, Component } from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Comment from './comment'
import Loader from './common/loader'
import {checkAndLoadCommentsForPage} from '../AC'

class CommentsPagination extends Component {

    componentWillMount() {
        this.props.checkAndLoadCommentsForPage(this.props.page)
    }

    componentWillReceiveProps({ page, checkAndLoadCommentsForPage }) {
        checkAndLoadCommentsForPage(page)
    }

    render() {
        const {total} = this.props
        if (!total) return <Loader/>
        return (
            <div>
                {this.getCommentItems()}
                {this.getPaginator()}
            </div>
        )
    }

    getCommentItems() {
        const {comments, loading} = this.props
        if (loading || !comments) return <Loader />
        const commentItems = comments.map(id => <li key={id}><Comment id={id}/></li>)
        return <ul>{commentItems}</ul>
    }

    getPaginator() {
        const {total} = this.props
        const items = new Array(Math.floor((total - 1) / 5) + 1).fill().map((_, i) =>
            <li key={i}><NavLink to={`/comments/${i + 1}`} activeStyle={{color: 'red'}}>{i + 1}</NavLink></li>
        )
        return <ul>{items}</ul>
    }
}

export default connect((state, { page }) => {
    const {total, pagination} = state.comments
    return {
        total,
        loading: pagination.getIn([page, 'loading']),
        comments: pagination.getIn([page, 'ids'])
    }
}, { checkAndLoadCommentsForPage })(CommentsPagination)