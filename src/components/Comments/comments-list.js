import React, {Component} from 'react';
import PropTypes from 'prop-types';
import accordion from "../../decorators/accordion-decorator";
import Comment from "./comment";

class CommentsList extends Component {

  /**
   *
   * @type {{comments: shim, openItemId: shim, toggleItem: shim}}
   */
  static propTypes = {
    comments: PropTypes.array,

    //from accordion decorator
    openItemId: PropTypes.string,
    toggleItem: PropTypes.func
  };

  /**
   *
   * @type {{comments: Array}}
   */
  static defaultProps = {
    comments: []
  };

  /**
   *
   * @returns {*}
   */
  render() {
    let {comments, openItemId, toggleItem} = this.props;

    let commentsList = comments.map((comment) => {
      return (
        <li key={comment.id}>
          <Comment comment={comment} isOpen={openItemId === comment.id} onButtonClick={toggleItem}/>
          <hr />
        </li>
      );
    });

    return (
      <ul className="comments-list">
        {comments.length > 0 && <h4 style={{textDecoration: "underline"}}><i>Comments:</i></h4>}
        {commentsList}
      </ul>
    );
  }

}

export default accordion(CommentsList);
