import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Article from '../article'
import accordion from '../../decorators/accordion'
import { filtratedArticles } from '../../selectors'

export class ArticleList extends Component {
    static propTypes = {
        articlesId: PropTypes.array.isRequired,

        //from accordion decorator
        openItemId: PropTypes.string,
        toggleItem: PropTypes.func
    };

    componentDidMount() {
        this.props.fetchData && this.props.fetchData()
    }

    render() {
        const { articlesId, openItemId, toggleItem } = this.props
        console.log('---', 'rendering ArticlList')
        const articleElements = articlesId.map(id =>
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
        articlesId: filtratedArticles(state)
    }
})(accordion(ArticleList))