import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from './article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,

        //from accordion decorator
        openItemId: PropTypes.string,
        toggleItem: PropTypes.func
    };

    render() {
        const { articles, openItemId, toggleItem } = this.props
        const articleElements = articles.map(article =>
            <li key = {article.id}>
                <Article
                    article = {article}
                    onButtonClick = {toggleItem(article.id)}
                    isOpen = {openItemId === article.id}
                />
            </li>
        )
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default accordion(ArticleList)