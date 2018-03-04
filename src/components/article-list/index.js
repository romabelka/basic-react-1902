import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Article from '../article'
import accordion from '../../decorators/accordion'
import store from '../../store'

export class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,

        //from accordion decorator
        openItemId: PropTypes.string,
        toggleItem: PropTypes.func
    };
    state = {
        from: store.getState().filterset.from,
        to: store.getState().filterset.to,
        selected: store.getState().filterset.selected
    }
    componentDidMount() {
        this.unsubscr = store.subscribe(this.handleStoreChange)
    }
    componentWillUnmout(){
        this.unsubscr()
    }
    handleStoreChange = ()=>{
        const {from, to, selected} = store.getState().filterset
        this.setState({from: from, to: to, selected: selected})
    }

    render() {
        const { articles, openItemId, toggleItem } = this.props

        const articleElements = articles.find(article => {
            if (this.state.selected) {
            const element = this.state.selected.find((item)=>{
                return item.value === article.id
            })

            return element// && this.getBody(article, toggleItem, openItemId)
        } else return
            //return (!this.state.selected || this.state.selected.length === 0) && this.getBody(article, toggleItem, openItemId)
        })
    if (typeof articleElements === 'undefined') return <div/>
        return (
            <ul>
                {this.getBody(articleElements, toggleItem, openItemId)}
            </ul>
        )
    }

    getBody = (article, toggleItem, openItemId)=> {
        return <li key = {article.id} className = "test__article-list--item">
        <Article article = {article}
    onButtonClick = {toggleItem}
    isOpen = {openItemId === article.id}/>
</li >
    }
}

export default connect(state => ({
    articles: state.articles
}))(accordion(ArticleList))