import React, { Component } from 'react'
import {connect} from 'react-redux'
import { NavLink, Route } from 'react-router-dom'
import Comment from '../comment'
import Loader from '../loader'
import { commentPagesSelector, commentsListSelector, commentsTotalSelector } from '../../selectors'
import { PER_PAGE } from '../../constants'
import { loadAllComments, loadPageComments } from '../../AC'

class CommentsRoute extends Component {
    static propTypes = {

    };

    componentDidMount() {
        const { loadAllComments, loaded} = this.props
        if (!loaded) loadPageComments()
    }

    render() {
        const { pages, total} = this.props
        const pageCount =  Math.ceil(total / PER_PAGE);
        const range = Array.apply(null, Array(pageCount)).map(function (_, i) {return i+1;});
        const pageElements = range.map(no =>
            <li><NavLink to = {`/comments/${no}`} >{no}</NavLink></li>
        )
        return (
            <div>
                <h2>Comments page</h2>
                {pageElements}

                {this.getPage()}
            </div>
        )
    }

    getPage() {
        const {match, loadPageComments} = this.props;
        const no = match.params && match.params.id || '1';
        const { pages } = this.props
        const page = pages.get(no)
        const { loaded, loading, comments } = page || {}

        if (loading)
          return <Loader />

        if (!loaded) {
            loadPageComments(no)
            return <div></div>
        }
        return <div> {this.getComments(comments)} </div>
    }

    getComments(comments) {
        return (
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

const createMapStateToProps = (state) => ({
    comments: commentsListSelector(state),
    pages: commentPagesSelector(state),
    total: commentsTotalSelector(state),
})

export default connect(createMapStateToProps, {loadAllComments, loadPageComments})(CommentsRoute)
