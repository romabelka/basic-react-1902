import React, { Component } from 'react'
import ArticleList from './components/articles/article-list'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DayPickerInstance from './daypicker'

class App extends Component {
  static propTypes = {

  };

  state = {
    selected: null
  }

  render() {
    const {articles} = this.props
    const options = articles.map(article => ({
      label: article.title,
      value: article.id
    }))
    return (
      <div>
        <form className="filter">
          <Select options = {options} value = {this.state.selected} onChange = {this.handleSelect} multi/>
          <DayPickerInstance />
        </form>
        <ArticleList articles = {articles} ref = {this.setListRef}/>
      </div>
    )
  }

  handleSelect = selected => this.setState({ selected })
}

export default App
