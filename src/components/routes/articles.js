import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ArticleList from '../article-list'
import Article from '../article'
import PropTypes from "prop-types";

class ArticlesRoute extends Component {
    static propTypes = {

    };

    static contextTypes = {
        dictionary: PropTypes.object
    }

    render() {
        console.log('---', 'rendering Articles Page')
        return (
            <div>
                <h2>{this.context.dictionary.articlePage}</h2>
                <ArticleList />
                <Route path = {`${this.props.match.path}/:id`} children = {this.getArticle}/>
            </div>
        )
    }

    getArticle = ({ match }) => {
        const {dictionary} = this.context
        if (!match) return <h2>{dictionary.pleaseSelectArticle}</h2>

        return <Article id = {match.params.id} key = {match.params.id} isOpen />
    }
}

export default ArticlesRoute