import React, { Component } from 'react'
import {findDOMNode} from 'react-dom'
import ArticleList from './components/article-list'
import Chart from './components/chart'
import UserForm from './components/user-form'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import { DateUtils } from 'react-day-picker'
import DateRange from './components/date-range/'

class App extends Component {
    static propTypes = {

    };

    constructor(props){
        super(props)
        this.state ={
            selected: null,
            range: this.resetRangeState()
        }
    }
    resetRangeState() {
        return {
            from: undefined,
            to: undefined,
        }
    }

    render() {
        const {articles} = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <UserForm />
                <Select options = {options} value = {this.state.selected} onChange = {this.handleSelect} multi/>
                <DateRange range={this.state.range} handleDayClick={this.handleDayClick} handleResetClick={this.handleResetState}/>
                <ArticleList articles = {articles} ref = {this.setListRef}/>
                <Chart articles = {articles}/>
            </div>
        )
    }

    handleSelect = selected => this.setState({ selected })	
    handleDayClick = (day) => {
        const range = DateUtils.addDayToRange(day, this.state.range);
        this.setState({range})
    }
    handleResetState = () => this.setState({range: this.resetRangeState()})

    setListRef = ref => {
        this.listRef = ref
        console.log(findDOMNode(ref))
    }
}

export default App