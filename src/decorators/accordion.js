import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
    state = {
        openItemId: null
    }

    toggleItem = openItemId => {
      openItemId = openItemId === this.state.openItemId ? null : openItemId
      return this.setState({ openItemId })
    }


    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleItem = {this.toggleItem} />
    }
}