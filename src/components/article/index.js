import React, {PureComponent, Fragment} from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import CommentList from '../comment-list'
import './style.css'

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
            <Fragment>
                <h2>
                    <span className="test__article--title">{article.title}</span>
                    <button
                        className = "test__article--button"
                        onClick={() => onButtonClick(article.id)}
                    >
                        {isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                <CSSTransition
                    transitionName = "article"
                    transitionAppear
                    transitionEnterTimeout = {500}
                    transitionLeaveTimeout = {300}
                    transitionAppearTimeout = {1000}
                    component = {Fragment}
                >
                    {isOpen && getBody(article)}
                </CSSTransition>
            </Fragment>
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