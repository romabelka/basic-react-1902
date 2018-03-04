import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {connect} from 'react-redux'

import 'react-select/dist/react-select.css'
import {selectArticle} from "../../AC";

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };


    handleChange = selected => {
        this.props.dispatch(selectArticle(selected));
    }

    render() {

        const { articles } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={this.props.selected}
            onChange={this.handleChange}
            multi
        />
    }
}

const mapStateToProps = (state)=>{
    return {
        articles:state.articles,
        selected:state.filters.selectedArticles
    }
}


export default connect(mapStateToProps)(SelectFilter)