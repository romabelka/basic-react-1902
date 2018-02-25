import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
    state = {
        openItemId: null
    }

    toggleItem = openItemId => {
        this.setState({ 
            openItemId: (this.state.openItemId == openItemId ? null: openItemId)
        })
    }


    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleItem = {this.toggleItem} />
    }
}