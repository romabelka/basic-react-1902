import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Article from '../article'
import accordion from '../../decorators/accordion'
import { filtratedArticles } from '../../selectors'

export class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,

        //from accordion decorator
        openItemId: PropTypes.string,
        toggleItem: PropTypes.func
    };

    componentDidMount() {
        this.props.fetchData && this.props.fetchData()
    }

    render() {
        const { articles, openItemId, toggleItem } = this.props
        console.log('---', 'rendering ArticlList', articles)
        const articleElements = articles.map(id =>
            <li key = {id} className = "test__article-list--item">
                <Article
                    id = {id}
                    onButtonClick = {toggleItem}
                    isOpen = {openItemId === id}
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

export default connect(state => {
    console.log('---', 'article list connect')
    return {
        articles: filtratedArticles(state)
    }
})(accordion(ArticleList))
