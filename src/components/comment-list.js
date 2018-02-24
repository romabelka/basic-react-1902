import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comment from './comment';
import accordion from '../decorators/accordion'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array.isRequired,

        //from accordion decorator
        openItemId: PropTypes.string,
        toggleItem: PropTypes.func
    };

    render() {
        const { comments, openItemId, toggleItem } = this.props;

        const commentElements = comments.map(comment =>
            <li key = {comment.id}>
                <Comment
                    comment = {comment}
                />
            </li>

        );

        function isOpenComments () {
            return openItemId === commentElements.id;
        }

        return (
            <div>
                <button onClick={() => toggleItem(commentElements.id)}>{isOpenComments() ? 'close' : 'open'}</button>

                {isOpenComments() &&
                    <ul>
                            {commentElements}
                    </ul>
                }
            </div>
        )
    }
}

export default accordion(CommentList)
