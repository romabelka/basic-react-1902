import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'

import 'react-day-picker/lib/style.css'
import {setDateRange} from "../../AC";

class DateRange extends Component {

    handleDayClick = (day) => this.props.dispatch(setDateRange(DateUtils.addDayToRange(day, this.props.dateRange)))

    render() {
        const { from, to } = this.props.dateRange
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        dateRange: state.filters.dateRange,
    }
}
export default connect(mapStateToProps)(DateRange)