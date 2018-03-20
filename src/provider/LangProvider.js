import React, { Component } from 'react';
import propTypes from 'prop-types'
import dictionaryObject from '../dictionary'

class LangProvider extends Component{

    static propTypes = {
        language: propTypes.string
    }

    static childContextTypes = {
        dictionary: propTypes.object
    }

    getChildContext() {
        return {
            dictionary: dictionaryObject[this.props.language]
        }
    }

    render() {
        return (
            <div>{this.props.children}</div>
        )
    }

}

export default LangProvider
