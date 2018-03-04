import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {connect} from 'react-redux'

import { updateFilterDate } from '../../AC'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {

  handleDayClick = (day) => {
    this.props.updateFilterDate(DateUtils.addDayToRange(day, this.props.filterDate))
  }

  render() {
    const { from, to } = this.props.filterDate

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
    filterDate: state.filterDate
  }),
  { updateFilterDate }
)(DateRange)
