import React from 'react';
import {render} from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux'
import {rootReducer} from './redux/rootReducer'
import {save} from 'redux-localstorage-simple'

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;


    const configureStore = preloadedState => (
      createStore(
        rootReducer,
        preloadedState,
        composeEnhancers(
          applyMiddleware(save({namespace: 'todo-list'}))
        ),
      )
    );
    const store = configureStore({});
// const store = createStore(rootReducer)
const app =(
  <Provider store={store}>
      <App width={window.innerWidth}/>
  </Provider>
)

console.log(store.getState())
render(
  app,
  document.getElementById('root')
);
