import React from 'react';
import {render} from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux'
import {rootReducer} from './redux/rootReducer'
const store = createStore(rootReducer)
const app =(
  <Provider store={store}>
      <App />
  </Provider>
)
console.log(window.innerWidth)
console.log(store.getState())
render(
  app,
  document.getElementById('root')
);
