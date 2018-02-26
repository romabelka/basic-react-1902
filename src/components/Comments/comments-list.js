import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ToggleContentDecorator from "../../decorators/toggle-content-decorator";
import Comment from "./comment";

class CommentsList extends Component {

  componentDidMount() {
    console.log('Test');
  }

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
    let {comments, isOpenItem, toggleItem} = this.props;
    console.log(isOpenItem);
    console.log('---', 2);

    if (!comments.length) {
      return null;
    }

    let commentsList = comments.map((comment) => {
      return (
        <li key={comment.id}>
          <Comment comment={comment}/>
          <hr />
        </li>
      );
    });

    return (
      <div>
        <h4 style={{textDecoration: "underline"}}>
          <i>Comments:</i>
          <button onClick={toggleItem}>
            {isOpenItem ? 'Close comments list' : 'Open comments list'}
          </button>
        </h4>
        {isOpenItem &&
          <ul className="comments-list">
            {commentsList}
          </ul>}
      </div>


    );
  }

}

export default ToggleContentDecorator(CommentsList);
