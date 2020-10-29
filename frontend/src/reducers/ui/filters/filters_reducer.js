import { combineReducers } from 'redux';

import books from './books_filters_reducer';
import bookclubs from './bookclubs_filters_reducer';
import forums from './forums_filters_reducer';
import posts from './posts_filters_reducer';

export default combineReducers({
    books,
    bookclubs,
    forums,
    posts
});
