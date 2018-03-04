import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { filterSet} from '../../AC'
import store from '../../store'


import 'react-day-picker/lib/style.css'

class DateRange extends Component {
    state = {
        from: store.getState().filterset.from,
        to: store.getState().filterset.to
    }
    componentDidMount(){
        this.unsubscr = store.subscribe(this.handleStoreChange)
    }

    componentWillUnmout(){
        this.unsubscr()
    }
    handleStoreChange = () => {
        const {from, to} = store.getState().filterset
        this.setState({
            from: from,
            to: to
        })
    }

    handleDayClick = (day) => {
        const range = DateUtils.addDayToRange(day, this.state)
        this.setState(range)
        const action = filterSet(range)
        store.dispatch(action)
    }
    //handleResetClick = ()=>{}

    render() {
        const {from, to }= this.state

        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
/*        {from &&
        to && (
            <button className="link" onClick={this.handleResetClick}>
            Сбросить дату
            </button>
            )}*/
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

export default DateRange