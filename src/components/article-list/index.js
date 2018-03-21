import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Loader from '../loader'
import accordion from '../../decorators/accordion'
import { filtratedArticles, loadingArticlesSelector, loadedArticlesSelector } from '../../selectors'
import { loadAllArticles } from '../../AC'

export class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        loading: PropTypes.bool,

        //from accordion decorator
        openItemId: PropTypes.string,
        toggleItem: PropTypes.func
    };

    componentDidMount() {
        const { loadAllArticles, loaded, loading} = this.props
        if (!loaded && !loading) loadAllArticles()
    }

    render() {
        const { articles, loading } = this.props
        console.log('LOADING', loading);
        if (loading) return <Loader />
        const articleElements = articles.map(article =>
            <li key = {article.id} className = "test__article-list--item">
                <NavLink to = {`/articles/${article.id}`} activeStyle = {{ color: 'red' }}>{article.title}</NavLink>
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
    articles: filtratedArticles(state),
    loading: loadingArticlesSelector(state),
    loaded: loadedArticlesSelector(state),
    router: state.router
}), { loadAllArticles })(accordion(ArticleList))