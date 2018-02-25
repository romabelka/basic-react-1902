import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import CommentsList from './comments-list';

class Article extends PureComponent {
    render() {
        const { isOpen, article: {id, title, text, comments}, onButtonClick } = this.props
        console.log('---', 1)
        return (
            <div>
                <h2>
                    {title}
                    <button onClick={() => onButtonClick(id)}>{isOpen ? 'close' : 'open'}</button>
                </h2>
                {isOpen && getBody(text)}
                <CommentsList comments={comments}/>
            </div>
        )
    }
}

function getBody(text) {
    return (
        <section>
            {text}
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