import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import CommentsList from './comment-list'

class Article extends PureComponent {
    render() {
        const { isOpen, article, onButtonClick } = this.props
        console.log('---', 1)
        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={() => onButtonClick(article.id)}>{isOpen ? 'close' : 'open'}</button>
                </h2>
                {isOpen && getBody(article)}
                {article.comments ? getComments(article) : []}
            </div>
        )
    }
}

function getBody(article) {
    return (
        <section>
            {article.text}
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
        text: PropTypes.string
    }).isRequired,
    onButtonClick: PropTypes.func
}

export default Article