import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom'
import Comment from '../comment';
import { loadCommentOnNumber } from '../../AC'
import { oneCommentSelector } from '../../selectors';

class CommentRoute extends Component {
    static propTypes = {
        loadCommentOnNumber: PropTypes.func,
        match: PropTypes.object
    }
    
    componentWillReceiveProps(nextProps) {
        console.log('nextProps', nextProps);
    }

    componentDidMount() {
        const { match, loadCommentOnNumber, comment } = this.props;

        if (match && !comment) {
            console.log(match.params.commentNumber);
            loadCommentOnNumber(match.params.commentNumber);
        }
    }

    render() {
        const { match, comment } = this.props;

        if (!match) return <h2>Please select an number comment</h2>
        if (!comment) return null;

        if (comment) {
            return <Comment comment={comment}/>
        }
    }
}


const createMapStateToProps = () => {
    const commentSelector = oneCommentSelector()

    return (state, ownProps) => ({
        comment: commentSelector(state, ownProps.match.params)
    })
}

export default connect(createMapStateToProps, { loadCommentOnNumber })(CommentRoute);
