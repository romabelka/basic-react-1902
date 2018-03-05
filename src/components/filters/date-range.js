import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { setFilter, filterArticles } from "../../AC"

import { connect } from 'react-redux'
import 'react-day-picker/lib/style.css'

class DateRange extends Component {
	
	handleDayClick = (day) => {
		const {selected, range, setFilter, filterArticles} = this.props
		setFilter(selected, DateUtils.addDayToRange(day, range))
		filterArticles(selected, DateUtils.addDayToRange(day, range))
	}
	
	render() {
		const {from, to} = this.props.range
		const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
		return (
			<div className="date-range">
				<DayPicker
					selectedDays={day => DateUtils.isDayInRange(day, {from, to})}
					onDayClick={this.handleDayClick}
				/>
				{selectedRange}
			</div>
		)
	}
	
}

export default connect(state => ({
	selected: state.filters.selected,
	range: state.filters.range
}), {setFilter, filterArticles})(DateRange)