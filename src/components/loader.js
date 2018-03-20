import React from 'react'
import FormatIntl from '../decorators/FormatIntl'

function Loader({ getIntl }) {
    return (
        <h2>{getIntl("loading")}...</h2>
    )
}

Loader.propTypes = {
}

export default FormatIntl(Loader)
