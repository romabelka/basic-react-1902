import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import ArticleList from './components/article-list'
import Chart from './components/chart'
import UserForm from './components/user-form'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

import {DateUtils, LocaleUtils} from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

class App extends Component {
    static propTypes = {

    };

    state = {
        selected: null,
        range:{
            from:null,
            to:null
        }
    }
    handleDayClick = day => {
        const range = DateUtils.addDayToRange(day, this.state.range);
        this.setState({range});
    }

    getFormattedDate = (date,separator) => {
        const actualSeparator = separator || '.';
        const day = date.getDay() < 10 ? "0" + date.getDay():date.getDay()
        const month = date.getMonth() < 10 ? "0" + date.getMonth():date.getMonth()
        return day + actualSeparator + month + actualSeparator + date.getFullYear()
    }

    selectedDays = () => {
        const {from,to} = this.state.range
        if(from === null && to === null){
            return "Select date range";
        }
        if(to === null){
            return "Selected date is " + this.getFormattedDate(from)
        }
        return "Selected date range: from " + this.getFormattedDate(from) + " to " + this.getFormattedDate(to)
    }

    render() {
        const {articles} = this.props
        const {from,to} = this.state.range
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        const dayPickerProps = {
            modifiers:{ from, to },
            selectedDays:[from,{ from, to }],
            onDayClick:this.handleDayClick,

        }
        return (
            <div>
                <UserForm />
                <Select options = {options} value = {this.state.selected} onChange = {this.handleSelect} multi/>
                <DayPickerInput dayPickerProps={dayPickerProps}
                                onDayChange={day => console.log(day)}
                                hideOnDayClick={false} />
                <div>{this.selectedDays()}</div>
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