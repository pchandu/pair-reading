import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'
import configureStore from './store/store';
import * as BookActions from './actions/book_actions'
import Axios from 'axios'

import jwt_decode from "jwt-decode";
import { setAuthToken,updateUser } from "./util/session_api_util";


//! debug
import {fetchFilteredBooks, changeBooksFilter, clearBooksFilter}              from "./actions/filters/book_filter_actions"
import {fetchFilteredBookclubs, changeBookclubsFilter, clearBookclubsFilter}  from "./actions/filters/bookclub_filter_actions"
import {fetchFilteredPosts, changePostsFilter, clearPostsFilter}              from "./actions/filters/post_filter_actions"
import {fetchFilteredForums, changeForumsFilter, clearForumsFilter}           from "./actions/filters/forum_filter_actions"

import {fetchFilteredUserBooks, fetchFilteredBookClubBooks}              from "./actions/filters/book_filter_actions"
import {fetchFilteredUserBookClubs, fetchFilteredBookBookClubs}  from "./actions/filters/bookclub_filter_actions"
import {fetchFilteredForumPosts, fetchFilteredUserPosts}           from "./actions/filters/post_filter_actions"
import {fetchFilteredBookForums, fetchFilteredBookClubForums}           from "./actions/filters/forum_filter_actions"

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
  ReactDOM.render(<Root store={store}/>, root);
  //! DEBUG
  window.store = store;
  window.getState = store.getState;
  window.BookActions = BookActions;
  window.axios = Axios;

  window.updateUser = updateUser;
  //! filter actions
  window.fetchFilteredBooks = fetchFilteredBooks; window.changeBooksFilter = changeBooksFilter; window.clearBooksFilter = clearBooksFilter
  window.fetchFilteredBookclubs = fetchFilteredBookclubs; window.changeBookclubsFilter = changeBookclubsFilter; window.clearBookclubsFilter = clearBookclubsFilter
  window.fetchFilteredPosts = fetchFilteredPosts; window.changePostsFilter = changePostsFilter; window.clearPostsFilter = clearPostsFilter
  window.fetchFilteredForums = fetchFilteredForums; window.changeForumsFilter = changeForumsFilter; window.clearForumsFilter = clearForumsFilter

  window.fetchFilteredUserBooks = fetchFilteredUserBooks; window.fetchFilteredBookClubBooks = fetchFilteredBookClubBooks;
  window.fetchFilteredUserBookClubs = fetchFilteredUserBookClubs; window.fetchFilteredBookBookClubs = fetchFilteredBookBookClubs;
  window.fetchFilteredForumPosts = fetchFilteredForumPosts; window.fetchFilteredUserPosts = fetchFilteredUserPosts;
  window.fetchFilteredBookForums = fetchFilteredBookForums; window.fetchFilteredBookClubForums = fetchFilteredBookClubForums;
})
