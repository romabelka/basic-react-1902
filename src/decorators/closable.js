import React from "react"

export default (Component) => class Closable extends React.Component{
    state = {
        opened:false
    }
    toggle = () => this.setState({opened:!this.state.opened})
    render(){
        return <Component onToggle={this.toggle} isOpen={this.state.opened} {...this.props}/>
    }
}