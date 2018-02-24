import React, { Component } from 'react'
import {findDOMNode} from 'react-dom'
import ArticleList from './components/article-list'
import Chart from './components/chart'
import UserForm from './components/user-form'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class App extends Component {
    static propTypes = {

    };

    static defaultProps = {
        numberOfMonths: 2
    };

    state = {
        selected: null,
        from: null,
        to: null
    }

    handleDayClick = (day) => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }

    handleResetClick = () => {
        this.setState({ from: null, to: null});
    }

    render() {
        const {articles} = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        const { from, to } = this.state;
        const modifiers = { start: from, end: to }

        const dayPickerStatus = () =>
            <p>
                {!from && !to && 'Please select the first day.'}
                {from && !to && 'Please select the last day.'}
                {from &&
                to &&
                `Selected from ${from.toLocaleDateString()} to 
                ${to.toLocaleDateString()}`}{' '}
                {from &&
                to && (
                    <button className="link" onClick={this.handleResetClick}>
                            Reset
                    </button>
                )}
            </p>

        return (
            <div>
                {dayPickerStatus()}
                <DayPicker
                    className="Selectable"
                    numberOfMonths={this.props.numberOfMonths}
                    selectedDays={[from, { from, to }]}
                    modifiers={modifiers}
                    onDayClick={this.handleDayClick}
                />
                <UserForm />
                <Select options = {options} value = {this.state.selected} onChange = {this.handleSelect} multi/>
                <ArticleList articles = {articles} ref = {this.setListRef}/>
                <Chart articles = {articles}/>
            </div>
        )
    }

    handleSelect = selected => this.setState({ selected })

    setListRef = ref => {
        this.listRef = ref
        console.log(findDOMNode(ref))
    }
}

export default App