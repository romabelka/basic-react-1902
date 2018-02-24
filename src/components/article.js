import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import CommentsList from './CommentsList'
import accordion from '../decorators/accordion'

class Article extends PureComponent {
    render() {
        const { isOpen, article, onButtonClick } = this.props
        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={ () => (isOpen ? onButtonClick(null) : onButtonClick(article.id)) }  > {isOpen ? 'Закрыть' : 'Открыть'}</button>
                </h2>
                {isOpen && this.getBody()}
            </div>
        )
    }
    getBody() {
        const {article, toggleItem, openItemId} = this.props
        console.log(this.props)
        return (
            <section>
                {article.text}
                <CommentsList 
                    comments = {article.comments}
                    listId = {article.id}
                    onButtonClick = {toggleItem}
                    isOpen = {openItemId === article.id}
                />
            </section>
        )
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

export default accordion(Article)