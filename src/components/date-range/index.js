import React from 'react';
import PropTypes from 'prop-types'
//import Helmet from 'react-helmet';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './style.css';


export default class DateRange extends React.Component {
    static defaultProps = {
        numberOfMonths: 2
    };
    static propTypes = {
        range: PropTypes.object,
        handleDayClick: PropTypes.func,
        handleResetClick: PropTypes.func
    }

    render() {
        const { from, to } = this.props.range;
        const modifiers = { start: from, end: to };
        return (
            <div className="RangeExample">
                <p>
                    {!from && !to && 'Please select the first day.'}
                    {from && !to && 'Please select the last day.'}
                    {from &&
                    to &&
                    `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
                    {from &&
                    to && (
                        <button className="link" onClick={this.props.handleResetClick}>
                            Reset
                        </button>
                    )}
                </p>
                <DayPicker
                    className="Selectable"
                    numberOfMonths={this.props.numberOfMonths}
                    selectedDays={[this.props.range.from, this.props.range]}
                    modifiers={modifiers}
                    onDayClick={this.props.handleDayClick}
                />

            </div>
        );
    }
}