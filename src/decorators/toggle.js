import React from 'react'

export default (OriginalToggle) => class DecoratedToggle extends React.Component {
    state = {
        openFlag: false
    }

    toggleOpen = () => this.setState({ openFlag: !this.state.openFlag })

    render() {
        return <OriginalToggle {...this.props} {...this.state} toggleOpen = {this.toggleOpen} />
    }
}
