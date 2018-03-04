import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {connect} from 'react-redux'
import {filterSet} from '../../AC'
import store from '../../store'
import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        selected: store.getState().filterset.selected
    }

    componentDidMount(){
        this.unsubscr = store.subscribe(this.handleStoreChange)
    }

    componentWillUnmout(){
        this.unsubscr()
    }

    handleChange = selected => {
        const action = filterSet(selected)
        this.props.dispatch(action)
    }
    handleStoreChange = () => {
        this.setState({
            selected: store.getState().filterset.selected
        })
    }

    render() {
        const { articles} = this.props

        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={this.state.selected}
            onChange={this.handleChange}
            multi
        />
    }
}

export default connect(state => ({
    articles: state.articles
}))(SelectFilter)