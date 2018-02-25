import React from 'react'
import PropTypes from 'prop-types';
import toggleComponent from '../decorators/toggle-component'

const CommentsList = ({comments}) => {
    return (
        <div>
            Comments:
            <ul style={{listStyleType: 'none'}}>
                {
                    comments.map(({id, user, text}) => (
                        <li key={id}>
                            <h1 style={{fontSize: '14px'}}>{user}</h1>
                            <div>{text}</div>
                        </li>
                    ))
                }
            </ul>
      </div>
    );
}

CommentsList.propTypes = {
    comments: PropTypes.array.isRequired
}

export default toggleComponent(CommentsList, {
    openButton: 'Show Comments',
    closeButton: 'Hide Comments'
});