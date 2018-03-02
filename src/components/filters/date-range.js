import React, { Component } from 'react'
import { connect } from 'react-redux'
import DayPicker, { DateUtils } from 'react-day-picker'
import { updateDateRange } from '../../AC'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {

    handleDayClick = (day, range) => {
      const { dateRange, updateDateRange } = this.props;
      const newRange = DateUtils.addDayToRange(day, dateRange)
      updateDateRange(newRange)
    }

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

const mapStateToProps = state => {
  return {
    dateRange: state.filters.dateRange
  }
}

const mapDispatchToProps = {
  updateDateRange
}

export default connect(mapStateToProps, mapDispatchToProps)(DateRange)
