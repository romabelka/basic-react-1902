import React from "react";
import {addComment} from "../../AC/index";
import {connect} from "react-redux";

class CommentInput extends React.Component{
    state={
        newComment:""
    }

    render(){
        return (
            <div>
                <h3>Add comment</h3>
                <span>text:
                <input value={this.state.newComment} onChange={(e)=>{this.setState({newComment:e.target.value})}}/>
                </span>
                <button onClick={()=>{
                    this.props.addComment(this.props.articleId,this.props.username,this.state.newComment);
                    this.setState({newComment:""})}
                }>add comment</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {username:state.user.username}
}

export default connect(mapStateToProps,{addComment})(CommentInput);