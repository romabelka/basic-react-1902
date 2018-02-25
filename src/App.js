import React, { Component } from 'react'
import {findDOMNode} from 'react-dom'
import ArticleList from './components/article-list'
// import Chart from './components/chart'
// import UserForm from './components/user-form'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import Diapazon from './components/day-picker';

class App extends Component {
    static propTypes = {

    };

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
                <Diapazon />
                <ArticleList articles = {articles} ref = {this.setListRef}/>
                {/*<UserForm />*/}
                <Select options = {options} value = {this.state.selected} onChange = {this.handleSelect} multi/>
                {/*<Chart articles = {articles}/>*/}
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