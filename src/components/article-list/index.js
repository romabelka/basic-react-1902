import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Article from '../article'
import accordion from '../../decorators/accordion'
import { filtratedArticles } from '../../selectors'

export class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.object.isRequired,

        //from accordion decorator
        openItemId: PropTypes.string,
        toggleItem: PropTypes.func
    };

    /*componentDidMount() {
        this.props.fetchData && this.props.fetchData()
    }*/

    render() {
        const { articles, openItemId, toggleItem } = this.props;
        console.log('---', 'rendering ArticleList');
        const articleElements = Object.keys(articles).map((articleId) => {
          return (<li key = {articleId} className = "test__article-list--item">
            <Article
              commentsLength = {articles[articleId].comments ? articles[articleId].comments.length : 0}
              article = {articles[articleId]}
              onButtonClick = {toggleItem}
              isOpen = {openItemId === articleId}
            />
          </li>);
        });
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
