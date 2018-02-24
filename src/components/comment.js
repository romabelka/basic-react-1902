import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class Comemnt extends PureComponent {
    render() {
        const { isOpen, comment, onButtonClick } = this.props

        return (
            <div>
                <p><b>{comment.user}</b> <button onClick={() => onButtonClick(comment.id)}>{isOpen ? 'close' : 'open'}</button></p>
                
                {isOpen && getBody(comment)}
            </div>
        )
    }
}

function getBody(comment) {
    return (
        <p>{comment.text}</p>
    )
}

Comemnt.propTypes = {
    isOpen: PropTypes.bool,
    comment: PropTypes.shape({
        id: PropTypes.string.isRequired,
        user: PropTypes.string,
        text: PropTypes.string,
    }).isRequired,
    onButtonClick: PropTypes.func
}

export default Comemnt