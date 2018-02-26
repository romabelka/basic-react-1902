import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from './article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,

        //from accordion decorator
        openItemId: PropTypes.string,
        openSubItemsId: PropTypes.string,
        toggleItem: PropTypes.func,
        toggleSubItems: PropTypes.func
    };

    render() {
        const { articles, openItemId, toggleItem, openSubItemsId, toggleSubItems } = this.props
        const articleElements = articles.map(article =>
            <li key = {article.id}>
                <Article
                    article = {article}
                    onButtonClick = {toggleItem}
                    onCommentsButtonClick = {toggleSubItems}
                    isOpen = {openItemId === article.id}
                    areCommentsOpen= {openSubItemsId === article.id}
                />
            </li>
        )
        return (
            <ul ref = {this.setContainerRef}>
                {articleElements}
            </ul>
        )
    }
    setContainerRef = containerRef => console.log(containerRef)
}

export default accordion(ArticleList)
