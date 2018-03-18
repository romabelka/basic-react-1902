import React from "react"
import {connect} from "react-redux";
import {loadComments} from "../AC/index";
import {NavLink} from 'react-router-dom'

import {commentsListSelector, loadedCommentsSelector, totalCommentsSelector} from "../selectors/index";
import Loader from "./loader";

class CommentsWithPagination extends React.Component{
    componentWillMount(){
        if(!this.props.loaded.includes(this.props.id)) {
            this.props.loadComments(this.props.id)
        }
    }

    render(){
        const {comments, id, total} = this.props
        const lastPage = Math.ceil(total/5)-1

        if(!comments) return <Loader/>

        return(<div>
            <ul>
                {id>0&&<li><NavLink to = {"/comments/" + (Number(id) - 1)} activeStyle = {{ color: 'red' }}>prev</NavLink></li>}
                {id!=lastPage&&<li><NavLink to = {"/comments/" + (Number(id) + 1)} activeStyle = {{ color: 'red' }}>next</NavLink></li>}
            </ul>
            {comments.map(item=>{
                return <Comment key={item.id} comment={item}/>
            })}
        </div>);
    }
}

const Comment = ({comment}) =>{
    return(
        <div>
            {comment.text} <b>by {comment.user}</b>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    comments:commentsListSelector(state, ownProps),
    loaded:loadedCommentsSelector(state),
    total:totalCommentsSelector(state)
})

export default connect(mapStateToProps,{loadComments})(CommentsWithPagination)