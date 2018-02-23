import React from "react"
import PropTypes from "prop-types"
import Comment from "./comment";
import closable from "../decorators/closable";

class CommentsList extends React.Component {
    render() {
        const {comments, onToggle, isOpen} = this.props
        if (!comments) {
            return null;
        }
        return (
            <div>
                <h3>
                    Comments
                    <button onClick={onToggle}>{isOpen ? 'close' : 'open'}</button>
                </h3>
                {isOpen && <ul ref={this.setContainerRef}>
                    {comments.map(comment =>
                        <li key={comment.id}>
                            <Comment comment={comment}/>
                        </li>
                    )}
                </ul>}
            </div>
        )
    }
}

CommentsList.propTypes = {
    comments: PropTypes.array
}

export default closable(CommentsList);

