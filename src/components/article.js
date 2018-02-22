import React from 'react'
import PropTypes from 'prop-types'

function Article({ isOpen, article, onButtonClick }) {
    return (
        <div>
            <h2>
                {article.title}
                <button onClick = {onButtonClick}>{isOpen ? 'close' : 'open'}</button>
            </h2>
            {isOpen && getBody(article)}
        </div>
    )
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
        text: PropTypes.string
    }).isRequired,
    onButtonClick: PropTypes.func
}

export default Article