import React, { Component } from 'react'

class Chart extends Component {
    static propTypes = {

    };

    componentDidMount() {
        //perform charting with d3
        console.log('---', this.refs.container)
    }

    componentWillReceiveProps() {
        //update chart
    }

    componentWillUnmount() {
        //clear up
    }

    render() {
        return <div ref = "container"/>
    }
}

export default Chart
