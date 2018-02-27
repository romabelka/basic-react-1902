import React, {PureComponent, Fragment} from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import CommentList from '../comments-list/index'
import './style.css'

class Article extends PureComponent {

  static propTypes = {
    isOpen: PropTypes.bool,
    article: PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired,
    onButtonClick: PropTypes.func
  }

  static defaultProps = {
    isOpen: false,
    onButtonClick: f => f
  };

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

export default Article
