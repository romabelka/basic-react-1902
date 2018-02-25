import React from 'react';
import PropTypes from 'prop-types';
import DayPicker, {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default class Calendar extends React.Component {
    static defaultProps = {
        numberOfMonths: 2
    };

    static propTypes = {
        numberOfMonths: PropTypes.number.isRequired
    }

    state = {
        from: null,
        to: null,
        enteredTo: null
    }

    isSelectingFirstDay = (from, to, day) => {
        const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from),
            isRangeSelected = from && to;
        return !from || isBeforeFirstDay || isRangeSelected;
    }

    handleResetClick = () => {
        this.setState({
            from: null,
            to: null,
            enteredTo: null
        })
    }

    handleDayClick = day => {
        const { from, to } = this.state;
        if (from && to && day >= from && day <= to) {
            this.handleResetClick();
            return;
        }

        if (this.isSelectingFirstDay(from, to, day)) {
            this.setState({
                from: day,
                to: null,
                enteredTo: null
            });
        } else {
            this.setState({
                to: day,
                enteredTo: day
            });
        }
    }

    handleDayMouseEnter = day => {
        const { from, to } = this.state;

        if (!this.isSelectingFirstDay(from, to, day)) {
            this.setState({
                enteredTo: day,
            });
        }
    }

    render() {
        const {numberOfMonths} = this.props,
            {from, to, enteredTo} = this.state,
            modifiers = {start: from, end: enteredTo},
            disabledDays = { before: from },
            selectedDays = [from, { from, to: enteredTo }]

        return (
            <div>
                { from && to &&
                    <div style={{
                        textAlign: 'center',
                        fontSize: '21px',
                        color: '#FF7F00'
                    }}>
                        Range: {`${from.toLocaleDateString()} - ${to.toLocaleDateString()}`}
                    </div>
                }
                <DayPicker
                    numberOfMonths={numberOfMonths}
                    fromMonth={from}
                    modifiers={modifiers}
                    selectedDays={selectedDays}
                    disabledDays={disabledDays}
                    onDayClick={this.handleDayClick}
                    onDayMouseEnter={this.handleDayMouseEnter}/>
            </div>
        );
    }
}