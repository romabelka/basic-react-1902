import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {findDOMNode} from 'react-dom'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import ArticlesPage from './components/routes/articles'
import UserForm from './components/user-form'
import Filters from './components/filters'
import Counter from './components/counter'
import HandleLng from './components/handle-lng'
import {GLOSSARY} from './constants'
import 'react-select/dist/react-select.css'
import CommentsPage from './components/routes/comments-page'

class App extends Component {
    componentWillMount() {
        this.compileGlossary()
    }
    
    static childContextTypes = {
        user: PropTypes.string,
        glossary: PropTypes.object
    }

    state = {
        username: '',
        glossary: {},
        lng: 1
    }

    getChildContext() {
        return {
            user: this.state.username,
            glossary: this.state.glossary
        }
    }

    render() {
        console.log('---', 'rendering App')
        const {glossary} = this.state
        return (
            <div>
                <HandleLng val={this.state.lng} onChange = {this.handleLngChange}/>
                <UserForm value = {this.state.username} onChange = {this.handleUserChange}/>
                <ul>
                    <li><NavLink to = "/counter" activeStyle = {{ color: 'red' }}>{glossary.counter}</NavLink></li>
                    <li><NavLink to = "/filters" activeStyle = {{ color: 'red' }}>{glossary.filters}</NavLink></li>
                    <li><NavLink to = "/articles" activeStyle = {{ color: 'red' }}>{ glossary.articles}</NavLink></li>
                    <li><NavLink to = "/comments/1" activeStyle = {{ color: 'red' }}>{glossary.comments}</NavLink></li>
                </ul>
                <Switch>
                    <Redirect from = "/" to = "/articles" exact />
                    <Route path = "/counter" component = {Counter} exact />
                    <Route path = "/filters" component = {Filters} />
                    <Route path = "/articles/new" render = {() => <h1>New Article Form</h1>} />
                    <Route path = "/articles" component = {ArticlesPage} />
                    <Route path = "/comments" component = {CommentsPage} />
                    <Route path = "/error" render = {() => <h1>Error page</h1>} />
                    <Route path = "*" render = {() => <h1>Not Found Page</h1>} />
                </Switch>
            </div>
        )
    }

    handleUserChange = username => this.setState({ username })

    handleLngChange = ev => {
        this.setState({'lng': +ev.target.value})
        this.compileGlossary(ev.target.value)
    }

    compileGlossary = (locale = this.state.lng) => {
        let glossary = {}
        for (var word in GLOSSARY) {
            glossary[word] = GLOSSARY[word][locale]
        }
        this.setState({ glossary })
    }
}

export default App