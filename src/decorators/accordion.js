import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
  state = {
    openItemId: null
  };

  toggleItem = openItemId => {
    if (openItemId === this.state.openItemId) {
      this.setState({openItemId: null})
    } else {
      this.setState({openItemId})
    }
  };


  render() {
    return <OriginalComponent {...this.props} {...this.state} toggleItem={this.toggleItem}/>
  }
}