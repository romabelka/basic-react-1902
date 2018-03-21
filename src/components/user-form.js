import React, { Component } from 'react'
import PropTypes from "prop-types";

class UserForm extends Component {
    static propTypes = {

    }

    static contextTypes = {
        dictionary: PropTypes.object
    }

    render() {
        return (
            <div>
                {this.context.dictionary.username}: <input value = {this.props.value} onChange = {this.handleChange}/>
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