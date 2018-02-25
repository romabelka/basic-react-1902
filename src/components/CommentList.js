import React, {Component} from 'react'
import PropTypes from 'prop-types'

import CommentItem from './CommentItem'


class CommentList extends Component {
  state = {
    isOpened: false
  }

  toggleListVisible() {
    return this.setState({ isOpened: !this.state.isOpened })
  }

  render() {
    const { items } = this.props
    return(
      <div className='commentsList'>
        <h3>Comments <button onClick={() => this.toggleListVisible()}>{this.state.isOpened ? 'hide' : 'show'}</button></h3>
        {this.state.isOpened && items.map( (item, itemKey) => {
          return <CommentItem key={itemKey} commentData={item} />
        })}
        </div>
    )
  }
}

CommentList.propTypes = {
  items: PropTypes.array,
  toggleListVisible: PropTypes.func
}

export  default CommentList