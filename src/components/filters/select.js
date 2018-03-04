import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { selectArticles } from '../../AC'
import {connect} from 'react-redux'
//import articles from '../../fixtures'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    /*state = {
        selected: null
    }*/

    //handleChange = selected => this.setState( selected )


    render() {
        const { /*articles,*/ selectedArticles,  filterArticles} = this.props
        const options = filterArticles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selectedArticles}
            onChange={this.handleChange}
            multi
        />
    }
    handleChange = (selectedList) => {
        const action = selectArticles(selectedList)
        this.props.dispatch(action)
    }
}
const mapStateToProps = state => ({
    //articles: state.articles,
    selectedArticles: state.selectedArticles,
    filterArticles: state.filterArticles
})
export default connect(mapStateToProps)(SelectFilter)
