import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Article from '../article'
import accordion from '../../decorators/accordion'
import moment from "moment";


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

    filterArticles = (articles) =>{
        const {selectedArticles,dateRange} = this.props;
        let resultArticles = articles.slice();
        if(selectedArticles.length !== 0) {
            const selected = selectedArticles.map(({value}) => value)
            resultArticles = resultArticles.filter(article => selected.includes(article.id))
        }

        if(dateRange.from && !dateRange.to){
            resultArticles = resultArticles.filter((article) => moment(article.date).isSameOrAfter(dateRange.from))
        }
        if(!dateRange.from && dateRange.to){
            resultArticles = resultArticles.filter((article) => moment(article.date).isSameOrBefore(dateRange.from))
        }

        if(dateRange.from && dateRange.to){
            resultArticles = resultArticles.filter((article) => moment(article.date).isBetween(dateRange.from,dateRange.to,"day","[]"))
        }
        return resultArticles;
    }


    render() {
        const { articles, openItemId, toggleItem } = this.props
        const filteredArticles = this.filterArticles(articles);
        const articleElements = filteredArticles.map(article =>
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
    selectedArticles:state.filters.selectedArticles,
    dateRange:state.filters.dateRange
}))(accordion(ArticleList))