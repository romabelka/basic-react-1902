import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
    state = {
        openItemId: null,
        show: false
    }

    toggleItem = openItemId => this.setState({ openItemId })

    showItem = () => this.setState({ show: !this.state.show })


    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleItem = {this.toggleItem} showItem = {this.showItem} />
    }
}
