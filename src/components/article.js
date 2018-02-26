import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import CommentList from './comment-list'

class Article extends PureComponent {
    state = {
        error: null
    }

    componentDidCatch(error) {
        console.log('---', error)
        this.setState({ error })
    }

    render() {
        if (this.state.error) return <h2>{this.state.error.message}</h2>

        const { isOpen, article, onButtonClick } = this.props
        return (
            <div>
                <h2>
                    {article.title}
                    <button
                        className = "test__article--button"
                        onClick={() => onButtonClick(article.id)}
                    >
                        {isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                {isOpen && getBody(article)}
            </div>
        )
    }
}

function getBody(article) {
    return (
        <section className = "test__article--body">
            {article.text}
            <CommentList comments={article.comments}/>
        </section>
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