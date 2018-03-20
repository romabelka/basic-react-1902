import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {findDOMNode} from 'react-dom'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import ArticlesPage from './components/routes/articles'
import UserForm from './components/user-form'
import Filters from './components/filters'
import Counter from './components/counter'
import 'react-select/dist/react-select.css'
import CommentsPage from './components/routes/comments-page'

class App extends Component {
    static propTypes = {
    };

    static childContextTypes = {
        user: PropTypes.string,
        lang: PropTypes.string,
        vocab: PropTypes.object
    }

    state = {
        username: '',
        language: 'en',
        vocabulary: {
          'counter':{
            'en':'counter',
            'ru':'счетчик'
          },
          'hide comments':{
            'en':'hide comments',
            'ru':'скрыть комментарии'
          },
          'Articles page':{
            'en':'Articles page',
            'ru':'Страница статей'
          }
        }
    }

    getChildContext() {
        return {
            user: this.state.username,
            lang: this.state.language,
            vocab: this.state.vocabulary
        }
    }

    render() {
        console.log('---', 'rendering App')
        return (
            <div>
                Language:
                <input type="radio" name="language" onChange={this.handleLanguageChange}  value='en' checked={this.state.language === 'en' }/>English
                <input type="radio" name="language" onChange={this.handleLanguageChange}  value='ru' checked={this.state.language === 'ru' }/>Russian

                <UserForm value = {this.state.username} onChange = {this.handleUserChange}/>

                <ul>
                    <li><NavLink to = "/counter" activeStyle = {{ color: 'red' }}>{this.state.vocabulary['counter'][this.state.language]}</NavLink></li>
                    <li><NavLink to = "/filters" activeStyle = {{ color: 'red' }}>filters</NavLink></li>
                    <li><NavLink to = "/articles" activeStyle = {{ color: 'red' }}>articles</NavLink></li>
                    <li><NavLink to = "/comments/1" activeStyle = {{ color: 'red' }}>comments</NavLink></li>
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
    handleLanguageChange = changeEvent => this.setState({ language: changeEvent.target.value })
}

export default App
