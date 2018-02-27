import React from 'react'

export default (OriginalAccordion) => class DecoratedAccordion extends React.Component {
    state = {
        openItemId: this.props.defaultOpenId
    }

    toggleItem = openItemId => this.setState({ openItemId })


    render() {
        return <OriginalAccordion {...this.props} {...this.state} toggleItem = {this.toggleItem} />
    }
}
