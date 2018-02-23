import React, {Component, PureComponent} from 'react';
import PropTypes from 'prop-types';

class Comment extends PureComponent {

  /**
   *
   * @type {{isOpen: shim, onButtonClick: shim, comment}}
   */
  static propTypes = {
    isOpen: PropTypes.bool,
    onButtonClick: PropTypes.func,
    comment: PropTypes.shape({
      text: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired
    }),
  };

  /**
   *
   * @type {{}}
   */
  static defaultProps = {};

  /**
   *
   * @returns {*}
   */
  render() {
    let {comment, isOpen, onButtonClick} = this.props;
    console.log('---', 2);

    return (
      <div>
        [<b>{comment.user}</b>][<i>#{comment.id}</i>]
        <button onClick={() => onButtonClick(comment.id)}>
          {isOpen ? 'Close comment' : 'Open comment'}
        </button>
        {isOpen && getCommentBody(comment)}
      </div>
    );
  }

}

/**
 *
 * @param comment
 * @returns {*}
 */
function getCommentBody(comment) {
  return (
    <p>{comment.text}</p>
  )
}

export default Comment;
