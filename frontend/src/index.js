import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'
import configureStore from './store/store';
import * as BookActions from './actions/book_actions'
import Axios from 'axios'

// We will use this to parse the user's session token
import jwt_decode from "jwt-decode";

// The session utility we just created
import { setAuthToken } from "./util/session_api_util";

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')
  let store;

  // If a returning user has a session token stored in localStorage
  if (localStorage.jwtToken) {
    // Set the token as a common header for all axios requests
    setAuthToken(localStorage.jwtToken);

    // Decode the token to obtain the user's information
    const decodedUser = jwt_decode(localStorage.jwtToken);

    // Create a preconfigured state we can immediately add to our store
    const preloadedState = {
      session: { isAuthenticated: true, user: decodedUser },
    };

    store = configureStore(preloadedState);

  } else {
    // If this is a first time user, start with an empty store
    store = configureStore({});
  };
  
  // window.store = store;
  // window.getState = store.getState;
  window.BookActions = BookActions;
  window.axios = Axios;
  ReactDOM.render(<Root store={store}/>, root);
})
