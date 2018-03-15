import React, { Component } from 'react'
import {findDOMNode} from 'react-dom'
import {Route, NavLink} from 'react-router-dom'
import ArticlesPage from './components/routes/articles'
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
                <ul>
                    <li><NavLink to = "/counter" activeStyle = {{ color: 'red' }}>counter</NavLink></li>
                    <li><NavLink to = "/filters" activeStyle = {{ color: 'red' }}>filters</NavLink></li>
                    <li><NavLink to = "/articles" activeStyle = {{ color: 'red' }}>articles</NavLink></li>
                </ul>
                <Route path = "/counter" component = {Counter}/>
                <Route path = "/filters" component = {Filters}/>
                <Route path = "/articles" component = {ArticlesPage}/>
            </div>
        )
    }
}

export default App