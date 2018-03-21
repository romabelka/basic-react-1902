import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { RU, EN } from '../constants'
import { MESSAGES } from '../international'

export default (OriginalComponent) => class FormatIntl extends Component {

  static contextTypes = {
      lang: PropTypes.string
  }

  getIntl = (id, langParam) => {
    const { lang } = this.context
    const message = MESSAGES[id][lang || langParam]
    return <span>{message || 'No id'}</span>
  }

  render() {
    return  <OriginalComponent {...this.props} getIntl = {this.getIntl} />
  }


}
