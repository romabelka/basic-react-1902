import React, { Component } from 'react'
import MenuItem from './menu-item'

class Menu extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <h2>Main Menu:</h2>
                {this.props.children}
            </div>
        )
    }
}

export { MenuItem }
export default Menu