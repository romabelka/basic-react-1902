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
        const { articles, filter } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={filter}
            onChange={this.handleChange}
            multi
        />
    }
}

export default connect(
  state => ({
    filter: state.filter.select
  }),
  { updateFilterSelect }
) (SelectFilter)
