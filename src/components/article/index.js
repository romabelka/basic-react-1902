import React, {PureComponent, Fragment, Component} from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import CommentList from '../comment-list'
import { deleteArticle } from '../../AC'
import './style.css'

class Article extends PureComponent {
    state = {
        error: null
    }

    /*componentWillReceiveProps(nextProps) {
        console.log('WillReceive Props => ', nextProps);
    }*/

    /*shouldComponentUpdate(nextProps, nextState) {
        console.log('ShouldUpdate => ', nextProps);
        return true;
    }*/

    componentDidCatch(error) {
        console.log('---', error)
        this.setState({ error })
    }

    render() {
        if (this.state.error) return <h2>{this.state.error.message}</h2>
        const { isOpen, article, onButtonClick } = this.props
        console.log('---Article is rendering');

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
                    {isOpen && getBody(article)}
                </CSSTransition>
            </Fragment>
        )
    }

    handleDelete = () => {
        const { deleteArticle, article } = this.props
        deleteArticle(article.id)
    }
}

function getBody(article) {
    return (
        <section className = "test__article--body">
            {article.text}
            <CommentList comments={article.comments} articleId={article.id}/>
        </section>
    )
}


Article.propTypes = {
    isOpen: PropTypes.bool,
    article: PropTypes.object.isRequired,
    onButtonClick: PropTypes.func
};

export default connect(null, { deleteArticle })(Article)
