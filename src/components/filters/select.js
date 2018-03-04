import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'
import { selectArticle } from '../../AC'
import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

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
 
    handleChange = selected => {
        const { selectArticle, article } = this.props
        selectArticle(selected.map(article => article.value)) // или этот map можно/нужно перенети в AC или редьюсер?
    }
}

const mapStateToProps = state => ({
    articles: state.articles,
    filterSelect: state.filterSelect
})

export default connect(mapStateToProps, { selectArticle })(SelectFilter)
