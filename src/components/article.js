import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import CommentsList from './comment-list'

class Article extends PureComponent {
    render() {
        const { isOpen, article, onButtonClick } = this.props
        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={() => onButtonClick(article.id)}>{isOpen ? 'close' : 'open'}</button>
                </h2>
                {isOpen && getBody(article)}
            </div>
        )
    }
}

function getBody(article) {
    return (
        <section>
            {article.text}
            {article.comments ? getComments(article) : []}
        </section>
    )
}

function getComments(article) {
    return (
        <CommentsList comments = {article.comments} />
    )
}


Article.propTypes = {
    isOpen: PropTypes.bool,
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
        comments: PropTypes.array
    }),
    onButtonClick: PropTypes.func
}

export default Article