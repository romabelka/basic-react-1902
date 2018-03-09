import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addComment } from '../../AC'

export class AddCommentForm extends Component {
    static propTypes = {
        user: PropTypes.string,
        text: PropTypes.string
    };

    state = {
        user: '',
        text: ''
    };

    bindToState = (name) => (event) => {
        this.setState({
            [name]: event.target.value
        });
    }

    submit = (event) => {
        event.preventDefault();
        const { addComment, articleId } = this.props;

        if (this.state.user && this.state.text) {
            addComment({
                ...this.state,
                articleId
            })
            this.setState({
                user: '',
                text: ''
            })
        }
    }

    render() {
        // адски, почему над onChange={...} value={...} нет сахара, как например во Vue?

        return (
            <form>
                <label>Author: <input type="text" name="user" onChange = {this.bindToState('user')} value={this.state.user}/></label><br/>
                <label>Comment: <textarea name="text" onChange={this.bindToState('text')} value={this.state.text}/></label><br/>
                <input type="submit" value="Submit" onClick={this.submit} />
            </form>
        )
    }
}

export default connect(null, { addComment })(AddCommentForm)