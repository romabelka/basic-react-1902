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
        const { articles, openItemId, toggleItem } = this.props
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

export default connect(state => {

  const {selected, range: {from, to}} = state.filtersArticles

  const filteredArticles = state.articles.filter(article => {
    let articleDate = Date.parse(article.date)

    return (
      (!from || articleDate > Date.parse(from)) &&
      (!to || articleDate < Date.parse(to)) &&
      (!selected.length || selected.includes(article.id))
    )
  })

  return {
    articles: filteredArticles
  }

})(accordion(ArticleList))