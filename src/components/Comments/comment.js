import React, {Component, PureComponent} from 'react';
import PropTypes from 'prop-types';

class Comment extends PureComponent {

  /**
   *
   * @type {{comment}}
   */
  static propTypes = {
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
    let {comment} = this.props;
    console.log('---', 3);

    return (
      <div>
        [<b>{comment.user}</b>][<i>#{comment.id}</i>]
        <p>{comment.text}</p>
      </div>
    );
  }

}

export default Comment;
