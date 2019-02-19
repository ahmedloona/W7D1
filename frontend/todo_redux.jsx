import React from 'react';

import ReactDOM from 'react-dom';

import configureStore from './store/store.js';

import {receiveTodos} from './actions/todo_actions.js';

import {receiveTodo} from './actions/todo_actions.js';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  const store = configureStore;
  window.store = store;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root  store={store}/>, rootEl);
});

