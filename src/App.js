import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {findDOMNode} from 'react-dom'
import ArticleList from './components/article-list'
import Chart from './components/chart'
import UserForm from './components/user-form'
import Filters from './components/filters'
import 'react-select/dist/react-select.css'

class App extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    render() {
        const {articles} = this.props
        return (
            <div>
                <UserForm />
                <Filters articles = {articles}/>
                <ArticleList articles = {articles} ref = {this.setListRef} defaultOpenId = {articles[0].id}/>
                <Chart articles = {articles}/>
            </div>
        )
    }

    setListRef = ref => {
        this.listRef = ref
        console.log(findDOMNode(ref))
    }
}

export default App