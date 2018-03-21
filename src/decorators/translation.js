import React from 'react'
import PropTypes from 'prop-types'
import { translateSelector } from '../selectors'


export class Translator extends React.Component {

  static childContextTypes = {
      dictionary: PropTypes.dict
  }

  getChildContext() {
      return {
          dictionary: this.props.dictionary
      }
  }

  render() {
      return <div> {this.props.children} </div>
  }
}


export function translate (OriginalComponent) {
  return class Translated extends React.Component {

    static contextTypes = {
        dictionary: PropTypes.object,
    }

    translateWord = message => translateSelector(this.context.dictionary, message)

    render() {
        return <OriginalComponent {...this.props} {...this.state} __ = {this.translateWord}/>
    }
  }
}
