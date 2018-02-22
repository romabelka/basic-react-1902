import React, { Component } from 'react'

class UserForm extends Component {
    static propTypes = {

    };

    state = {
        username: ''
    }

    render() {
        return (
            <div>
                username: <input value = {this.state.username} onChange = {this.handleChange}/>
            </div>
        )
    }

    handleChange = ev => {
        if (ev.target.value.length > 10) {
            return
        }

        this.setState({
            username: ev.target.value
        })
    }
}

export default UserForm