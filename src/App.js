import React, { Component } from 'react'
import {findDOMNode} from 'react-dom'
import {Route, NavLink, Switch} from 'react-router-dom'
import ArticlesPage from './components/routes/articles'
import CommentsPage from './components/routes/comments'
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
                    <li><NavLink to = "/comments" activeStyle = {{ color: 'red' }}>comments</NavLink></li>
                </ul>
                <Switch>
                    <Route path = "/counter" component = {Counter} exact />
                    <Route path = "/filters" component = {Filters} />
                    <Route path = "/articles/new" render = {() => <h1>New Article Form</h1>} />
                    <Route path = "/articles" component = {ArticlesPage} />
                    <Route path = "/comments/:id" component = {CommentsPage} />
                    <Route path = "/comments" component = {CommentsPage} />
                    <Route path = "*" render = {() => <h1>Not Found Page</h1>} />
                </Switch>
            </div>
        )
    }
}

export default App
