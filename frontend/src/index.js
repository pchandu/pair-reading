import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'
import configureStore from './store/store';
import * as BookActions from './actions/book_actions'
import Axios from 'axios'

import jwt_decode from "jwt-decode";
import { setAuthToken,updateUser } from "./util/session_api_util";


// 

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = {
      session: { isAuthenticated: true, user: decodedUser },
    };
    store = configureStore(preloadedState);
  } else {
    store = configureStore({});
  };
  
  window.store = store;
  window.getState = store.getState;
  window.BookActions = BookActions;
  window.axios = Axios;

  window.updateUser = updateUser;
  ReactDOM.render(<Root store={store}/>, root);
})
