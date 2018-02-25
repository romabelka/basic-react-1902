import React, { Component } from 'react'
import ArticleList from './components/article-list'
import UserForm from './components/user-form'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DatePicker from './components/DatePicker'

class App extends Component {
    static propTypes = {

    }

    state = {
        selected: null
    }

    render() {
        const {articles} = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
              <div>
                <UserForm />
                <br/>
                <Select options = {options} value = {this.state.selected} onChange = {this.handleSelect} multi/>
                <DatePicker />
              </div>
                <ArticleList articles = {articles} ref = {this.setListRef}/>
            </div>
        )
    }

    handleSelect = selected => this.setState({ selected })
}

export default App