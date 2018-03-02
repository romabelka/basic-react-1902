import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Select from 'react-select'
import { selectArticle } from '../../AC'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    render() {
        const { articles, selectedArticles, selectArticle } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selectedArticles}
            onChange={selectArticle}
            multi
        />
    }
}

const mapStateToProps = state => {
  return {
    articles: state.articles,
    selectedArticles: state.filters.selectedArticles
  }
}

const mapDispatchToProps = {
  selectArticle
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectFilter)
