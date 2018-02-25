import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
    state = {
        openItemId: null,
        openSubItemsId: null
    }

    toggleItem = (clickedItemId, isOpen) =>
    {
      let openItemId = isOpen ? null : clickedItemId
      this.setState({openItemId: openItemId })
    }

    toggleSubItems = (clickedItemId, areOpen) =>
    {
      let openSubItemsId = areOpen ? null : clickedItemId
      this.setState({openSubItemsId:  openSubItemsId})
    }


    render() {
        return <OriginalComponent {...this.props} {...this.state}  toggleItem={this.toggleItem} toggleSubItems={this.toggleSubItems}/>
    }
}
