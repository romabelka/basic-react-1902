import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Article from '../article'
import accordion from '../../decorators/accordion'

export class ArticleList extends Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
    filters: PropTypes.object.isRequired,

    //from accordion decorator
    openItemId: PropTypes.string,
    toggleItem: PropTypes.func
  };

  componentDidMount() {
    this.props.fetchData && this.props.fetchData()
  }

  render() {
    const {articles, openItemId, toggleItem, filters: {fromDate, toDate}} = this.props;

    const articleElements = articles.map((article) => {
      let element = <li key={article.id} className="test__article-list--item">
        <Article article={article} onButtonClick={toggleItem} isOpen={openItemId === article.id}/>
      </li>;

      if (!fromDate || !toDate) {
        return element;
      }

      /*console.log(fromDate.getTime());
      console.log('-----');
      console.log(toDate.getTime());
      console.log(Date.parse(article.date));
      console.log('=================');*/

      let articleTimestamp = Date.parse(article.date);
      let fromTimestamp = fromDate.getTime();
      let toTimestamp = toDate.getTime();

      if (articleTimestamp >= fromTimestamp && articleTimestamp <= toTimestamp) {
        return element;
      }
    });

    return (
      <ul>
        {articleElements}
      </ul>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
    filters: state.filters
  }
};

export default connect(
  mapStateToProps
)(accordion(ArticleList))
