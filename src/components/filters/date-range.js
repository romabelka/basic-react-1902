import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {connect} from 'react-redux'

import { updateFilterDate } from '../../AC'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {

  handleDayClick = (day) => {
    this.props.updateFilterDate(DateUtils.addDayToRange(day, this.props.filter))
  }

  render() {
    const { from, to } = this.props.filter

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

export default connect(
  state => ({
    filter: state.filter.date
  }),
  { updateFilterDate }
)(DateRange)
