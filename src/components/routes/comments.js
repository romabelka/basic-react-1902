import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Loader from '../loader'
import { commentListSelector } from '../../selectors'
import { loadCommentsList } from '../../AC'
import { LIMIT } from '../../constants'

class CommentsRoute extends Component {
    componentDidMount(){
        const {loadCommentsList} = this.props
        loadCommentsList()
    }
    componentWillReceiveProps(){
        //console.log("need rerender!")
    }
    render(){
        const {total} = this.props

        return (
            <div>
                { this.getLinks(total) }
               <Route {...this.props} path = {`${this.props.match.path}/:list`} children = {this.getComments}/>
            </div>
        )
    }

    getComments = ({ match }) => {
        if (!match) return <h3>Select comments list </h3>
        const {loadedComments} = this.props
        if (!loadedComments) return <Loader/>
        const list = loadedComments[match.params.list - 1]
        if ( !list || !list.length) return <Loader/>
        const commentElement = list.map( comment => {
            return(
                <div key={comment.id}>
                    <b>{comment.user}</b>: {comment.text}
                </div>
            )
        })
        return <section>{ commentElement }</section>
    }

    getLinks = (total) => {
        if (!total) return <Loader/>
        const count = Math.floor(total/ LIMIT) +( total % LIMIT === 0 ? 0 : 1)
        const links =(Array.from(Array(count).keys())).map( i => {
            const p = i + 1
            return <li key = {i}>
                <NavLink to={`${this.props.match.path}/${p}`}>{p}</NavLink>
            </li>
        })
        return <ul>
            {links}
            </ul>
    }
}


export default connect(state => ({
    loadedComments: commentListSelector(state),
    total: state.comments.total
}), { loadCommentsList })(CommentsRoute)