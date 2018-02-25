import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class Comment extends PureComponent {
    render() {
        return (
            <div>
                <h2>
                    {this.props.user}
                </h2>
                {this.props.text}
            </div>
        )
    }
}

Comment.propTypes = {
  user: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired    
}

export default Comment
