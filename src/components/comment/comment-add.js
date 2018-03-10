import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addComment } from '../../AC'

class CommentAddForm extends Component {
    static propTypes = {
      articleId: PropTypes.string.isRequired,
    }

    state = {
        textIsEmpty: true,
        nameIsEmpty: true
    }

    handeChangeName = (e) => {
        e.target.value.trim().length ? this.setState({ nameIsEmpty: false }) : this.setState({ nameIsEmpty: true })
    }

    handeChangeText = (e) => {
        e.target.value.trim().length ? this.setState({ textIsEmpty: false }) : this.setState({ textIsEmpty: true })
    }

    handleAddComment = () => {
        const { addComment, articleId } = this.props
        addComment({
          "user": this.refs.commentName.value,
          "text": this.refs.commentText.value
        }, articleId)

        this.refs.commentName.value = ''
        this.refs.commentText.value = ''
    }

    render() {
        return (
          <div>
              <p><b>Добавить комментарий:</b></p>
              <input
                  type="text"
                  ref="commentName"
                  className="comments-list__name"
                  placeholder="Ваше имя"
                  onChange = { this.handeChangeName }
              />
              <textarea
                  placeholder="Текст комментария"
                  className="comments-list__text"
                  ref="commentText"
                  onChange = { this.handeChangeText }
                  >
              </textarea>
              <button
                  className="comments-list__add"
                  onClick = { this.handleAddComment }
                  disabled = { this.state.textIsEmpty || this.state.nameIsEmpty }
                  >
                  Добавить
              </button>
          </div>
        )
    }

}


export default connect(null, { addComment })(CommentAddForm)
