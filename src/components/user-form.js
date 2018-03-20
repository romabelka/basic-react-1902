import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FormatIntl from '../decorators/FormatIntl'

class UserForm extends Component {
    static propTypes = {
      getIntl: PropTypes.func
    };

    render() {
        return (
            <div>
                {this.props.getIntl("username")}: <input value = {this.props.value} onChange = {this.handleChange}/>
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

export default FormatIntl(UserForm)
