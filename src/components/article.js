import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Comment from './comment'

class Article extends PureComponent {
    render() {
        const { isOpen, article, onButtonClick, onCommentsButtonClick, areCommentsOpen} = this.props
        console.log('---', 1)
        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={() => onButtonClick(article.id, isOpen)}>{isOpen ? 'close' : 'open'}</button>
                </h2>
                {isOpen && getBody(article, onCommentsButtonClick, areCommentsOpen)}
            </div>
        )
    }
}

function getBody(article, onCommentsButtonClick, areCommentsOpen) {
    return (
        <div>
          {article.text}
          <div>
            <button onClick={() => onCommentsButtonClick(article.id, areCommentsOpen)}>{areCommentsOpen ? 'hide' : 'show'} comments</button>
          </div>
          {areCommentsOpen && article.comments && getComments(article.comments)}
        </div>
    )
}

function getComments(comments) {
  const commentElements = comments.map(comment =>
      <li key = {comment.id}>
          <Comment
              text = {comment.text}
              user = {comment.user}
          />
      </li>
  )
  return (
      <ul>
          {commentElements}
      </ul>
  )

}



Article.propTypes = {
    isOpen: PropTypes.bool,
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string
    }).isRequired,
    onButtonClick: PropTypes.func
}

export default Article
