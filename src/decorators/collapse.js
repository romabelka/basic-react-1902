import React from 'react'

export default (OriginalComponent) => class Collapse extends React.Component {
  state = {
    isOpen: false
  }

  toggleItem = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return <OriginalComponent {...this.props} {...this.state} toggleItem = {this.toggleItem} />
  }
}
