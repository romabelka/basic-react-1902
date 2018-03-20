import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Loader extends Component {

    static propTypes = {}

    static contextTypes = {
        dictionary: PropTypes.object
    }

    render() {
        return (
            <h2>{this.context.dictionary['Loading']}</h2>
        )
    }
}

export default Loader
