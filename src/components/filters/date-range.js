// import React, { Component } from 'react'
// import DayPicker, { DateUtils } from 'react-day-picker'

// import 'react-day-picker/lib/style.css'

// class DateRange extends Component {
//     state = {
//         from: null,
//         to: null
//     }

//     handleDayClick = (day) => this.setState(DateUtils.addDayToRange(day, this.state))

//     render() {
//         const { from, to } = this.state
//         const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
//         return (
//             <div className="date-range">
//                 <DayPicker
//                     selectedDays={ day => DateUtils.isDayInRange(day, { from, to}) }
//                     onDayClick={ this.handleDayClick }
//                 />
//                 {selectedRange}
//                 <button onClick = {this.handleFilter}>Filter</button>
//             </div>
            
//         )
//     }

// }

// export default DateRange


import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { filterDate, filterArticlesByDate} from '../../AC'
import { connect } from 'react-redux'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {

    handleDayClick = (day) => {
        const { filterDate, rangeDays } = this.props
        filterDate(DateUtils.addDayToRange(day, rangeDays))
    }

    handleFilter = () => {
        const { articles, rangeDays, filterArticlesByDate } = this.props
        const firstDate= Date.parse(rangeDays.from)
        const secondDate= Date.parse(rangeDays.to)
        filterArticlesByDate(firstDate, secondDate)
    }

    render() {
        const {from, to } = this.props.rangeDays
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
                <button onClick = {this.handleFilter}>
                    Filter
                </button>
            </div>
        )
        }


}
const mapStateToProps = state => ({
    rangeDays: state.filter.range,
    filteredArticles: state.filter.filtered,
    articles: state.articles
})

export default connect(mapStateToProps, { filterDate, filterArticlesByDate })(DateRange)