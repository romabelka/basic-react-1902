import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import CommentsList from './comment-list'
import tumbler from '../decorators/tumbler'

class Article extends PureComponent {
    render() {
        const { isOpen, article, onButtonClick, toggleStatus, toggleDepend  } = this.props
        console.log('---', 1)
        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={() => onButtonClick(article.id)}>{String.fromCharCode(isOpen ? 0x25b6: 0x25bc)}</button>
                </h2>
                {isOpen && getBody(article, toggleStatus, toggleDepend)}
            </div>
        )
    }
}

function getBody(article, flag, toggleDepend) {
    let commentsToggleBtn
    if (typeof article.comments !== 'undefined') {
        commentsToggleBtn = <button onClick={()=> toggleDepend(flag) }>{flag ? 'hide comments' : 'open  comments'}</button>
    }
    return (
        <section>
            {article.text}
            {commentsToggleBtn}
            <CommentsList comments = {article.comments} toggleFlag = {flag}/>
        </section>
    )
}


Article.propTypes = {
    isOpen: PropTypes.bool,
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string
    }).isRequired,
    onButtonClick: PropTypes.func,

    //from tumbler decorator
    toggleStatus: PropTypes.bool,
    toggleDepend: PropTypes.func
}

export default tumbler(Article)