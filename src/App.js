import React, {Component} from 'react'
import PropTypes from 'prop-types';
import ArticleList from './components/Article/article-list'
import './style.css';
import Calendar from "./components/calendar";

class App extends Component {

  static propTypes = {
    articles: PropTypes.array.isRequired
  };

  render() {
    const {articles} = this.props;

    return (
      <div>
        <Calendar />
        <ArticleList articles={articles}/>
      </div>
    )
  }
}

export default App;
