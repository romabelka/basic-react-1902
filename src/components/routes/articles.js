import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ArticleList from '../article-list'
import Article from '../article'
import PropTypes from 'prop-types'

class ArticlesRoute extends Component {
    static propTypes = {

    };
    static contextTypes = {
        glossary: PropTypes.object
    }
    render() {
        console.log('---', 'rendering Articles Page')
        return (
            <div>
                <h2>{ this.context.glossary['articles'] }</h2>
                <ArticleList />
                <Route path = {`${this.props.match.path}/:id`} children = {this.getArticle}/>
            </div>
        )
    }

    getArticle = ({ match }) => {
        if (!match) return <h2>{ this.context.glossary['Please select an article'] }</h2>

        return <Article id = {match.params.id} key = {match.params.id} isOpen />
    }
}

export default ArticlesRoute