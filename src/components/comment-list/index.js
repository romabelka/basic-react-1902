import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import toggleOpen from '../../decorators/toggleOpen'
import { addComment } from '../../AC'
import { connect } from 'react-redux'
import './style.css'

class CommentList extends Component {
    static defaultProps = {
        comment: '',
        comments: []
    }

    static propTypes = {
        comments: PropTypes.array.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    handleAdd = () => {
        const { comment } = this.state
        const { addComment } = this.props
        console.log('add', comment)
        addComment(comment)
        this.setState({comment: ''})
    }

    handleChange = (event) => {
      console.log('change', event.target.value)
      this.setState({comment: event.target.value})
    }

    render() {
        const {isOpen, toggleOpen} = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                <button onClick={toggleOpen} className="test__comment-list--btn">{text}</button>
                <CSSTransition
                    transitionName="comments"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                >
                    {this.getBody()}
                </CSSTransition>

                { isOpen && <Fragment>
                    <textarea onChange = {this.handleChange} style={{ width: '100%'}} />
                    <br/>
                    <button onClick = {this.handleAdd}>
                        add comment
                    </button>
                </Fragment> }
            </div>
        )
    }

    getBody() {
        const {comments, isOpen} = this.props
        if (!isOpen) return null

        return (
            <div className="test__comment-list--body">
                {
                    comments.length
                        ? this.getComments()
                        : <h3 className="test__comment-list--empty">No comments yet</h3>
                }
            </div>
        )
    }

    getComments() {
      console.log('comments', this.props.comments)
        return (
            <ul>
                {
                    this.props.comments.map(id =>
                        <li key = {id} className = "test__comment-list--item">
                            <Comment id = {id}/>
                        </li>)
                }
            </ul>
        )
    }
}

const createMapStateToProps = (state, ownProps) => {
  console.log('---', 'comnent list connect')
  console.log('---', 'ownProps', ownProps)
  return {
      comments: ownProps.comments
  }
}

// export default toggleOpen(CommentList)
export default toggleOpen(connect(createMapStateToProps, { addComment })(CommentList))
