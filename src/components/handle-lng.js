import React, { Component } from 'react'
import PropTypes from 'prop-types'

class HandleLng extends Component {
    static propTypes = {
        val: PropTypes.number,
        onChange: PropTypes.func
    };

    render () {
        const langids = ["langEN", "langRU", "langDE"]
        const langlbls = ['English', "Русский", "Deutsch"]

        const radioElements = langlbls.map( (l, index) => {
            const {val, onChange} = this.props
            return (
              <span key={langids[index]}>
                <input type="radio" name="language" value={index} id={langids[index]}
                       defaultChecked = {val === index}
                       onClick={onChange}/>
                <label htmlFor={langids[index]}>{l}</label>
              </span>
            )
        })

        return (
            <p>
                {radioElements}
            </p>
        )
    }
}

export default HandleLng