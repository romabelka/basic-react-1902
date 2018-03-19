import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import CommentList from '../comment-list'
import Loader from '../loader'
import { deleteArticle, loadArticleById } from '../../AC'
import { articleSelector } from '../../selectors'
import './style.css'

class Article extends Component {
    state = {
        error: null
    }

    componentDidCatch(error) {
        console.log('---', error)
        this.setState({ error })
    }

    componentDidMount() {
        const { loadArticleById, article, id } = this.props
        if (!article || (!article.text && !article.loading)) loadArticleById(id)
    }

    render() {
        console.log('---', 'rendering Article')
        if (this.state.error) return <h2>{this.state.error.message}</h2>

        const { isOpen, article, onButtonClick } = this.props
        if (!article) return null

        return (
            <Fragment>
                <h2>
                    {article.title}
                    <button
                        className = "test__article--button"
                        onClick={() => onButtonClick(article.id)}
                    >
                        {isOpen ? 'close' : 'open'}
                    </button>
                    <button onClick = {this.handleDelete}>
                        delete me
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
                    {this.getBody()}
                </CSSTransition>
            </Fragment>
        )
    }

    getBody() {
        const { article, isOpen } = this.props
        if (!isOpen) return null
        if (article.loading) return <Loader/>

        return (
            <section className = "test__article--body">
                {article.text}
                <CommentList article = {article}/>
            </section>
        )
    }

    handleDelete = () => {
        const { deleteArticle, article } = this.props
        deleteArticle(article.id)
    }
}


Article.propTypes = {
    isOpen: PropTypes.bool,
    article: PropTypes.shape({
        title: PropTypes.string,
        text: PropTypes.string
    }),
    onButtonClick: PropTypes.func
}

export default connect((state, props) => ({
    article: articleSelector(state, props)
}), { deleteArticle, loadArticleById }, null, { pure: false })(Article)