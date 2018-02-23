import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'

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
                {isOpen && <CommentList comments={article.comments} />}
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


Article.propTypes = {
    isOpen: PropTypes.bool,
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
        comments: PropTypes.array,
    }).isRequired,
    onButtonClick: PropTypes.func
}

export default Article
