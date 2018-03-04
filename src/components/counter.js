import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {increment} from '../action-creators'

class Counter extends Component {
    static propTypes = {
        count: PropTypes.number
    };

    render() {
        return (
            <div>
                <h3>
                    {this.props.count}
                    <button onClick = {this.handleIncrement}>increment</button>
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

export default connect(mapStateToProps)(Counter)
