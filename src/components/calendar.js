import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DayPicker, { DateUtils } from 'react-day-picker';
import Helmet from 'react-helmet';
import 'react-day-picker/lib/style.css';

class Calendar extends Component {

  /**
   *
   * @type {{}}
   */
  static propTypes = {};

  /**
   *
   * @type {{}}
   */
  static defaultProps = {};

  /**
   *
   * @type {{from: undefined, to: undefined}}
   */
  state = {
    from: undefined,
    to: undefined,
  };

  /**
   *
   * @param day
   */
  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  };

  /**
   *
   */
  handleResetClick = () => {
    this.setState({
      from: undefined,
      to: undefined
    });
  };

  /**
   *
   * @returns {*}
   */
  render() {
    const {from, to} = this.state;
    const modifiers = {start: from, end: to};
    return (
      <div className="calendar-range">

        <p>
          {!from && !to && <b>Please select the first day</b>}

          {from && !to && <b>Please select the last day.</b>}

          {from && to && `Selected from ${from.toLocaleDateString()} to ${to.toLocaleDateString()}`}{' '}

          {from && to && (
            <button className="link" onClick={this.handleResetClick}>
              Reset
            </button>
          )}
        </p>

        <DayPicker
          className="Selectable"
          numberOfMonths={1}
          selectedDays={[from, {from, to}]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
        />

        {addCalendarRangeStylesToHead()}

        <hr /><hr />

      </div>
    );
  }

}

/**
 *
 * @returns {*}
 */
function addCalendarRangeStylesToHead() {
  return <Helmet>
      <style>{`
    .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
      background-color: #f0f8ff !important;
      color: #4a90e2;
    }
    .Selectable .DayPicker-Day {
      border-radius: 0 !important;
    }
    .Selectable .DayPicker-Day--start {
      border-top-left-radius: 50% !important;
      border-bottom-left-radius: 50% !important;
    }
    .Selectable .DayPicker-Day--end {
      border-top-right-radius: 50% !important;
      border-bottom-right-radius: 50% !important;
    }
  `}</style>
  </Helmet>
}

export default Calendar;
