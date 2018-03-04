import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'

import { updateFilterSelect } from '../../AC'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    handleChange = selected => {
      const { updateFilterSelect } = this.props
      updateFilterSelect( selected )
    }

    render() {
        const { articles, filterSelect } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={filterSelect}
            onChange={this.handleChange}
            multi
        />
    }
}

export default connect(
  state => ({
    filterSelect: state.filterSelect
  }),
  { updateFilterSelect })
(SelectFilter)
