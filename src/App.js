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
import Article from './components/article'
import { EN, RU } from './constants'
import FormatIntl from './decorators/FormatIntl'

class App extends Component {
    static propTypes = {
    };

    static childContextTypes = {
        user: PropTypes.string,
        lang: PropTypes.string
    }

    state = {
        username: '',
        lang: EN,
    }

    getChildContext() {
        return {
            user: this.state.username,
            lang: this.state.lang
        }
    }

    handleLangButton = lang => {
      this.setState({ lang })
    }

    render() {
        console.log('---context', this.context)
        return (
            <div>
                <button onClick = {() => this.handleLangButton(RU)}>RU</button>
                <button onClick = {() => this.handleLangButton(EN)}>EN</button>
                <UserForm value = {this.state.username} onChange = {this.handleUserChange}/>
                <ul>
                    <li><NavLink to = "/counter" activeStyle = {{ color: 'red' }}>{this.props.getIntl("counter", this.state.lang)}</NavLink></li>
                    <li><NavLink to = "/filters" activeStyle = {{ color: 'red' }}>{this.props.getIntl("filters", this.state.lang)}</NavLink></li>
                    <li><NavLink to = "/articles" activeStyle = {{ color: 'red' }}>{this.props.getIntl("articles", this.state.lang)}</NavLink></li>
                    <li><NavLink to = "/comments/1" activeStyle = {{ color: 'red' }}>{this.props.getIntl("comments", this.state.lang)}</NavLink></li>
                </ul>
                <Switch>
                    <Redirect from = "/" to = "/articles" exact />
                    <Route path = "/counter" component = {Counter} exact />
                    <Route path = "/filters" component = {Filters} />
                    <Route path = "/articles/new" render = {() => <h1>New Article Form</h1>} />
                    <Route path = "/articles/:id" component = {({ match }) => <Article id = {match.params.id} key = {match.params.id} isOpen />} />
                    <Route path = "/articles" component = {ArticlesPage} />
                    <Route path = "/comments" component = {CommentsPage} />
                    <Route path = "/error" render = {() => <h1>Error page</h1>} />
                    <Route path = "*" render = {() => <h1>Not Found Page</h1>} />
                </Switch>
            </div>
        )
    }

    handleUserChange = username => this.setState({ username })
}

export default FormatIntl(App)
