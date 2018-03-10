import React, { Component } from 'react'
import {findDOMNode} from 'react-dom'
import ArticleList from './components/article-list'
import UserForm from './components/user-form'
import Filters from './components/filters'
import Counter from './components/counter'
import 'react-select/dist/react-select.css'

class App extends Component {
    static propTypes = {
    };

    render() {
        return (
            <div>
                <UserForm />
                <Counter />
                <Filters />
                <ArticleList ref = {this.setListRef} />
            </div>
        )
    }

    setListRef = ref => {
        this.listRef = ref
    }
}

export default App
