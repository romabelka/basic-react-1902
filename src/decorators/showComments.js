import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
    state = {
        show: false
    }

    showItem = () => this.setState({ show: !this.state.show })


    render() {
        return <OriginalComponent {...this.props} {...this.state} showItem = {this.showItem} />
    }
}
