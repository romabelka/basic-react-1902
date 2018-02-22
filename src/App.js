import React, { Component } from 'react'
import {findDOMNode} from 'react-dom'
import ArticleList from './components/article-list'
import Chart from './components/chart'

class App extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <ArticleList articles = {this.props.articles} ref = {this.setListRef}/>
                <Chart articles = {this.props.articles}/>
            </div>
        )
    }

    setListRef = ref => {
        this.listRef = ref
        console.log(findDOMNode(ref))
    }
}

export default App