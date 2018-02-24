import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
    state = {
        openItemId: null
    }

    toggleItem = openItemId => {
        if (this.state.openItemId === openItemId) {
            this.setState({ openItemId: null })
        } else {
            this.setState({ openItemId })
        }
    }


    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleItem = {this.toggleItem} />
    }
}