import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ArticleList from '../article-list'
import Article from '../article'

class ArticlesRoute extends Component {
    static propTypes = {

    };

    render() {
        console.log('---', this.props.match)
        return (
            <div>
                <h2>Articles page</h2>
                <ArticleList />
                <Route path = "/articles/:id" render = {this.getArticle}/>
            </div>
        )
    }

    getArticle = ({ match }) => {
        return <Article id = {match.params.id} key = {match.params.id} isOpen />
    }
}

export default ArticlesRoute