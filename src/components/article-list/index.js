import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Article from '../article'
import accordion from '../../decorators/accordion'
import { DateUtils } from 'react-day-picker'

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
        const { articles, openItemId, toggleItem, selected, daterange} = this.props
        const selectedIds = selected && selected.map(article => article.value);
        const filteredArticles = articles.filter(article => {
            let ok, day = new Date(article.date);

            // OPTIMIZE Как лучше оформлять такие цепочки условий?
            ok = true
              && (!selectedIds || !selectedIds.length || selectedIds.indexOf(article.id) > -1)
              && ((!daterange.from || !daterange.to) || DateUtils.isDayInRange(day, daterange));

            return ok;
          }
        );
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
    selected: state.select,
    daterange: state.daterange
}))(accordion(ArticleList))
