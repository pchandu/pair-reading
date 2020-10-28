import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'
import configureStore from './store/store';
import * as BookActions from './actions/book_actions'
import Axios from 'axios'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')
  const store = configureStore();
  
  window.store = store;
  window.getState = store.getState;
  window.BookActions = BookActions;
  window.axios = Axios;
  ReactDOM.render(<Root store={store}/>, root);
})
