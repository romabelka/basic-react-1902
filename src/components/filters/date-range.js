import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { updateCalendar } from '../../AC'
import 'react-day-picker/lib/style.css'

class DateRange extends Component {

    handleDayClick = (day) => {
        const { filterCalendar, updateCalendar } = this.props
        updateCalendar(DateUtils.addDayToRange(day, filterCalendar))
    }

    render() {
        const { filterCalendar: { from, to } } = this.props
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

export default connect((store) => ({
    filterCalendar: store.filterCalendar
}), { updateCalendar })(DateRange)