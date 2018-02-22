import React, { Component } from 'react'
import ArticleList from './components/article-list'

class App extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <ArticleList articles = {this.props.articles}/>
            </div>
        )
    }
}

export default App