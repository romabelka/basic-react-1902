import React, { Component } from 'react'
import {findDOMNode} from 'react-dom'
import ArticleList from './components/article-list'
import Chart from './components/chart'
import DateRangePicker from './components/DateRangePicker'
class App extends Component {
    static propTypes = {

    };

    state = {
        selected: null
    }

    render() {
        const {articles} = this.props
        return (
            <div>
                <DateRangePicker />
                <ArticleList articles = {articles} ref = {this.setListRef}/>
                <Chart articles = {articles}/>
            </div>
        )
    }

    handleSelect = selected => this.setState({ selected })

    setListRef = ref => {
        this.listRef = ref
        console.log(findDOMNode(ref))
    }
}

export default App