import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Loader extends Component{
    static contextTypes = {
        glossary: PropTypes.object
    }
    render () {
        return (
            <h2>{ this.context.glossary.loading }</h2>
        )
    }
}

Loader.propTypes = {
}

export default Loader