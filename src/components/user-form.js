import React, { Component } from 'react'
import {changeUsername} from "../AC/index";
import {connect} from "react-redux";

class UserForm extends Component {

    render() {
        return (
            <div>
                username: <input value = {this.props.username} onChange = {this.handleChange}/>
            </div>
        )
    }

    handleChange = ev => {
        if (ev.target.value.length > 10) {
            return
        }

        this.props.changeUsername(ev.target.value)
    }
}

const mapStateToProps = state => {
    return {username:state.user.username}
}

export default connect(mapStateToProps,{changeUsername})(UserForm)