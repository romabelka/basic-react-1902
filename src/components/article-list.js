import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from './article'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        openArticleId: null
    }

    render() {
        const articleElements = this.props.articles.map(article =>
            <li key = {article.id}>
                <Article
                    article = {article}
                    onButtonClick = {this.toggleArticle(article.id)}
                    isOpen = {this.state.openArticleId === article.id}
                />
            </li>
        )
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    toggleArticle = openArticleId => () => this.setState({ openArticleId })
}

export default ArticleList