import React, {Component} from 'react'

export default (OriginalComponent) => class TumblerComponent extends Component {
    state = {
        toggleStatus: false
    }
    
    toggleDepend = toggleStatus => this.setState({ toggleStatus: !toggleStatus })

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleDepend = { this.toggleDepend } />
    }
}