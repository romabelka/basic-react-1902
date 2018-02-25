import React, { Component } from 'react'
import ArticleList from './components/article-list'
import Diapazon from './components/day-picker';
import PropTypes from 'prop-types'

class App extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    render() {
        const {articles} = this.props
        return (
            <div>
                <Diapazon />
                <ArticleList articles = {articles} ref = {this.setListRef}/>
            </div>
        )
    }
}

export default App