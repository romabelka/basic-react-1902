// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App'
// import registerServiceWorker from './registerServiceWorker'
// import articles from './fixtures'
//
// ReactDOM.render(<App articles = {articles} />, document.getElementById('root'))
// registerServiceWorker()

import { createStore } from 'redux'

function articles(state = [], action) {
  if (action.type === 'ADD_ARTICLE')
    return [
      ...state,
      action.payload
    ]
  return state;
}

const store = createStore(articles)

console.log(store.getState())

store.subscribe(() => {
  console.log('subscribe', store.getState())
})

store.dispatch({type: 'ADD_ARTICLE', payload: 'new artice'})
