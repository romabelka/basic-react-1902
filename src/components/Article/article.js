import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import CommentsList from '../Comments/comments-list';

class Article extends PureComponent {

  /**
   *
   * @type {{isOpen: shim, article: *, onButtonClick: shim}}
   */
  static propTypes = {
    isOpen: PropTypes.bool,
    onButtonClick: PropTypes.func,
    article: PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired,
  };

  /**
   *
   * @returns {*}
   */
  render() {
    const {article, isOpen, onButtonClick} = this.props;
    console.log('---', 1);

    return (
      <div>
        <h2>
          {article.title}
          <button onClick={() => onButtonClick(article.id)}>{isOpen ? 'Close article' : 'Open article'}</button>
        </h2>
        {isOpen && getArticleBody(article)}
      </div>
    )
  }

}

/**
 *
 * @param article
 * @returns {*}
 */
function getArticleBody(article) {
  return (
    <section>
      {article.text}
      <div>
        <CommentsList comments={article.comments}/>
      </div>
    </section>
  )
}

export default Article;
