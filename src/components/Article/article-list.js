import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Article from './article';
import AccordionDecorator from '../../decorators/accordion-decorator';

class ArticleList extends Component {

  /**
   *
   * @type {{articles: *, openItemId: shim, toggleItem: shim}}
   */
  static propTypes = {
    articles: PropTypes.array.isRequired,

    //from accordion decorator
    openItemId: PropTypes.string,
    toggleItem: PropTypes.func
  };

  /**
   *
   * @returns {*}
   */
  render() {
    const {articles, openItemId, toggleItem} = this.props;

    const articleElements = articles.map(article =>
      <li key={article.id} className="articles-list__item">
        <Article
          article={article}
          onButtonClick={toggleItem}
          isOpen={openItemId === article.id}
        />
      </li>
    );

    return (
      <div>
        <h1 style={{textDecoration: "underline", textAlign: "center"}}>Articles List</h1>
        <ul className="articles-list">
          {articleElements}
        </ul>
      </div>
    )
  }

}

export default AccordionDecorator(ArticleList)
