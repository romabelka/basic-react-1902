import React, {Component} from 'react';
import PropTypes from 'prop-types'
import DayPicker, {DateUtils} from 'react-day-picker';
import {connect} from 'react-redux';
import {filterDates} from "../../action-creators";
import 'react-day-picker/lib/style.css';
import './style.css';

class DateRange extends Component {

  static propTypes = {
    filters: PropTypes.object.isRequired
  };

  handleDayClick = (day) => {
    let {fromDate: from, toDate: to} = this.props.filters;
    let range = DateUtils.addDayToRange(day, {from, to});

    this.props.changeDaysRange(range.from, range.to);
  };

  handleResetClick = () => {
    this.props.changeDaysRange(null, null);
  };

  render() {
    const {fromDate, toDate} = this.props.filters;
    const modifiers = {start: fromDate, end: toDate};
    return (
      <div className="date-range">
        <hr /><hr />
        <p>
          {!fromDate && !toDate && 'Please select the first day.'}
          {fromDate && !toDate && 'Please select the last day.'}
          {fromDate && toDate && `Selected from ${fromDate.toDateString()} to ${toDate.toDateString()}`}{' '}
          {fromDate && toDate && (
            <button className="link" onClick={this.handleResetClick}>
              Reset
            </button>
          )}
        </p>
        <DayPicker
          className='Selectable'
          numberOfMonths={2}
          selectedDays={day => DateUtils.isDayInRange(day, {from: fromDate, to: toDate})}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
        />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeDaysRange(fromDate, toDate) {
      dispatch(filterDates(fromDate, toDate));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateRange)
