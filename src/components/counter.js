import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {increment} from '../AC'
import FormatIntl from '../decorators/FormatIntl'

class Counter extends Component {
    static propTypes = {
        count: PropTypes.number
    };

    render() {
        return (
            <div>
                <h3>
                    {this.props.count}
                    <button onClick = {this.handleIncrement}>{this.props.getIntl("incriment")}</button>
                </h3>
            </div>
        )
    }

    handleIncrement = () => {
        const action = increment()
        this.props.dispatch(action)
    }
}

const mapStateToProps = state => ({
    count: state.counter
})

export default connect(mapStateToProps)(FormatIntl(Counter))
