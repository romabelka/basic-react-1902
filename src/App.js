import React, { Component } from 'react'
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
                <ArticleList />
            </div>
        )
    }
}

export default App
