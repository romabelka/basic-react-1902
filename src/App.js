import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {findDOMNode} from 'react-dom'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import ArticlesPage from './components/routes/articles'
import UserForm from './components/user-form'
import Filters from './components/filters'
import Counter from './components/counter'
import 'react-select/dist/react-select.css'
import CommentsPage from './components/routes/comments-page'
import LangProvider from './components/common/lang-provider'

class App extends Component {
    static propTypes = {};

    static childContextTypes = {
        user: PropTypes.string
    }

    state = {
        username: '',
        language: 'ru'
    }

    getChildContext() {
        return {
            user: this.state.username
        }
    }

    changeLanguage = language => ev => this.setState({language})

    render() {
        return (
            <LangProvider language={this.state.language}>
                <div>
                    <UserForm value={this.state.username} onChange={this.handleUserChange}/>
                    <ul>
                        <li onClick={this.changeLanguage('en')}>English</li>
                        <li onClick={this.changeLanguage('ru')}>Russian</li>
                    </ul>
                    <ul>
                        <li><NavLink to="/counter" activeStyle={{color: 'red'}}>counter</NavLink></li>
                        <li><NavLink to="/filters" activeStyle={{color: 'red'}}>filters</NavLink></li>
                        <li><NavLink to="/articles" activeStyle={{color: 'red'}}>articles</NavLink></li>
                        <li><NavLink to="/comments/1" activeStyle={{color: 'red'}}>comments</NavLink></li>
                    </ul>
                    <Switch>
                        <Redirect from="/" to="/articles" exact/>
                        <Route path="/counter" component={Counter} exact/>
                        <Route path="/filters" component={Filters}/>
                        <Route path="/articles/new" render={() => <h1>New Article Form</h1>}/>
                        <Route path="/articles" component={ArticlesPage}/>
                        <Route path="/comments" component={CommentsPage}/>
                        <Route path="/error" render={() => <h1>Error page</h1>}/>
                        <Route path="*" render={() => <h1>Not Found Page</h1>}/>
                    </Switch>
                </div>
            </LangProvider>
        )
    }

    handleUserChange = username => this.setState({username})
}

export default App