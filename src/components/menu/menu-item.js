import React from 'react'
import {NavLink} from 'react-router-dom'

function MenuItem({ to, children }) {
    return (
        <div>
            <NavLink to = {to} activeStyle = {{ color: 'red' }}>{children}</NavLink>
        </div>
    )
}

export default MenuItem