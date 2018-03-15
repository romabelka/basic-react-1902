import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ArticleList from '../article-list'
import Article from '../article'

class ArticlesRoute extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h2>Articles page</h2>
                <ArticleList />
                <Route path = {`${this.props.match.path}/:id`} children = {this.getArticle}/>
            </div>
        )
    }

    getArticle = ({ match }) => {
        if (!match) return <h2>Please select an article</h2>

        return <Article id = {match.params.id} key = {match.params.id} isOpen />
    }
}

export default ArticlesRoute