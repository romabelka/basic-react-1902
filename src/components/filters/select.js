import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'
import { filterSelect } from "../../AC";

import 'react-select/dist/react-select.css'
import articles from "../../reducer/articles";

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    handleChange = selected => this.props.filterSelect(selected.map(article => article.value))

    render() {
        const { articles, selected } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selected}
            onChange={this.handleChange}
            multi
        />
    }
}

export default connect(
  (state) => ({
      articles: state.articles,
      selected: state.filtersArticles.selected
  }),
  { filterSelect }
)(SelectFilter)