import React, { Component } from 'react'

import CommentsWithPagination from "../commentsWithPagination"


class Comments extends Component {
    static propTypes = {

    };


    render() {
        const id = this.props.match.params.id;
        return (
            <div>
                <h2>Comments page</h2>
                <CommentsWithPagination id={id} key={id}/>
            </div>
        )
    }
}

export default Comments