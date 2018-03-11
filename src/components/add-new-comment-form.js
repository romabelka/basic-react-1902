import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNewComment } from '../AC';

class AddNewCommentForm extends Component {

  state = {
    userName: '',
    text: ''
  };

  static propTypes = {
    articleId: PropTypes.string.isRequired,
    addComment: PropTypes.func.isRequired
  };

  static defaultProps = {};

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addComment(this.state.userName, this.state.text, this.props.articleId);
    this.setState({
      userName: '',
      text: ''
    })
  };

  handleUsernameInput = (e) => {
    this.setState({
      userName: e.target.value
    });
  };

  handleTextInput = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  render() {
    return (
      <div style={{border: '1px solid #000', padding: '5px', marginTop: '10px'}}>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='username'>Username</label><br />
            <input type='text' name='username' id='username' placeholder='Input your name' value={this.state.userName} onChange={this.handleUsernameInput} />
            <br /><br />
          </div>
          <div>
            <label htmlFor='text'>Text</label><br />
            <textarea name='text' id='text' placeholder='Input text' value={this.state.text} onChange={this.handleTextInput} />
            <br /><br />
          </div>
          <div>
            <input type="submit" value="Add" disabled={!(this.state.userName && this.state.text)}/>
          </div>
        </form>
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    articleId: ownProps.articleId
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment(user, text, articleId) {
      dispatch(addNewComment(user, text, articleId));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewCommentForm);
