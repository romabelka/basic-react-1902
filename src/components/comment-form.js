import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../AC'

class CommentForm extends Component {
    state = {
        authorname: "",
        commenttext: ""
    }

    render() {

        const {rel} = this.props
        return (
            <form method="post">

                <label htmlFor={"authorname-" + rel}>name: </label>
                <input type="text"
                       name="authorname"
                       id={"authorname-" + rel}
                       value={this.state.authorname}
                       onChange={this.handleInput}
                /><br/>

                <label htmlFor={"newcommenttext-" + rel}>text: </label>
                <textarea name="text" id={"newcommenttext-" + rel} onChange={this.handleTextChange}
                          value={this.state.commenttext}></textarea> <br/>
                <input type="button" onClick={this.handleAddcommentClick} value="Add"/>
            </form>
        )
    }

    handleInput = ev => {
        this.setState({
            authorname: ev.target.value
        })
    }

    handleTextChange = ev => {
        this.setState({
            commenttext: ev.target.value
        })
    }

    handleAddcommentClick = () => {
        const {addComment, rel} = this.props
        if (this.state.authorname.length && this.state.commenttext.length ) {
            addComment({articleid: rel, user: this.state.authorname, text: this.state.commenttext})
            this.setState({authorname: '', commenttext:''})
        }
    }
}

export default connect(null, { addComment })(CommentForm)