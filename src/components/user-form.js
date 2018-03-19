import React, { Component } from 'react'

class UserForm extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                username: <input value = {this.props.value} onChange = {this.handleChange}/>
            </div>
        )
    }

    handleChange = ev => {
        if (ev.target.value.length > 10) {
            return
        }

        this.props.onChange(ev.target.value)
    }
}

export default UserForm