import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Article from '../article'
import accordion from '../../decorators/accordion'

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
        const { articles, openItemId, toggleItem, filterSelect, filterCalendar: {from, to} } = this.props

        const articleElements = articles
            .filter(article => filterSelect.length === 0 || filterSelect.indexOf(article.id) > -1)
            .filter(article => {
                let articleDate = new Date(article.date);
                return from === null || to === null ||
                    articleDate >= new Date(from) &&  articleDate <= new Date(to);
            })
            .map(article =>
                <li key = {article.id} className = "test__article-list--item">
                    <Article
                        article = {article}
                        onButtonClick = {toggleItem}
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

export default connect(state => ({
    articles: state.articles,
    filterSelect: state.filterSelect,
    filterCalendar: state.filterCalendar
}))(accordion(ArticleList))