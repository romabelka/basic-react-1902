import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Article from '../article'
import Loader from '../loader'
import accordion from '../../decorators/accordion'
import { filtratedArticles, loadingArticlesSelector } from '../../selectors'
import { loadAllArticles } from '../../AC'

export class ArticleList extends Component {
<<<<<<< HEAD
  static propTypes = {
    articles: PropTypes.array.isRequired,
=======
    static propTypes = {
        articles: PropTypes.array.isRequired,
        loading: PropTypes.bool,
>>>>>>> upstream/master

    //from accordion decorator
    openItemId: PropTypes.string,
    toggleItem: PropTypes.func
  };

<<<<<<< HEAD
  componentDidMount() {
    this.props.fetchData && this.props.fetchData()
  }
=======
    componentDidMount() {
        this.props.loadAllArticles()
    }
>>>>>>> upstream/master

    render() {
        const { articles, openItemId, toggleItem, loading } = this.props
        if (loading) return <Loader />
        const articleElements = articles.map(article =>
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

<<<<<<< HEAD
export default connect(state => {
    console.log('---', 'article list connect')
    return {
        articles: filtratedArticles(state)
    }
})(accordion(ArticleList))
=======
export default connect(state => ({
    articles: filtratedArticles(state),
    loading: loadingArticlesSelector(state)
}), { loadAllArticles })(accordion(ArticleList))
>>>>>>> upstream/master
