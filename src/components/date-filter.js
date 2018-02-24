import React, {Component} from 'react'
import PropTypes from 'prop-types'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

function formatDate(date) {
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}

class DateFilter extends Component {
    state = {
        from: null,
        to: null,
    }

    render() {
        return (
            <div>
                <DayPickerInput onDayChange = { this.selectDate('from') }/>
                <DayPickerInput onDayChange = { this.selectDate('to') }/>
                { this.renderLabel() }
            </div>
        )
    }

    renderLabel () {
        if (this.state.from || this.state.to) {
            return <p>{this.state.from} — {this.state.to}</p>
        }
    }

    selectDate (dateName) {
        return (date) => {
            this.setState({
                [dateName]: formatDate(date),
            })
        }
    }
}

export default DateFilter