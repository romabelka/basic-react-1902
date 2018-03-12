import React, {PureComponent, Fragment} from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import CommentList from '../comment-list'
import Loader from '../loader'
import { deleteArticle, loadArticleById } from '../../AC'
import './style.css'

class Article extends PureComponent {
    state = {
        error: null
    }

    componentDidCatch(error) {
        console.log('---', error)
        this.setState({ error })
    }

    componentWillReceiveProps({ isOpen, loadArticleById, article }) {
        if (!this.props.isOpen && isOpen && !article.text) loadArticleById(article.id)
    }

    render() {
        if (this.state.error) return <h2>{this.state.error.message}</h2>

        const { isOpen, article, onButtonClick } = this.props
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
        title: PropTypes.string.isRequired,
        text: PropTypes.string
    }).isRequired,
    onButtonClick: PropTypes.func
}

export default connect(null, { deleteArticle, loadArticleById })(Article)