import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ArticleList from '../article-list'
import Article from '../article'
import FormatIntl from '../../decorators/FormatIntl'

class ArticlesRoute extends Component {
    static propTypes = {

    };

    render() {
        console.log('---', 'rendering Articles Page')
        return (
            <div>
                <h2>{this.props.getIntl("articlesPage")}</h2>
                <ArticleList />
                <Route path = {`${this.props.match.path}/:id`} children = {this.getArticle}/>
            </div>
        )
    }

    getArticle = ({ match }) => {
        if (!match) return <h2>{this.props.getIntl("pleaseSelectAnArticle")}</h2>

        return <Article id = {match.params.id} key = {match.params.id} isOpen />
    }
}

export default FormatIntl(ArticlesRoute)
