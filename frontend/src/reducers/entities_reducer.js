import { combineReducers } from 'redux';
import booksReducer from './books_reducer'
import forumsReducer from './forums_reducer'
import bookclub_reducer from './bookclub_reducer';
// import usersReducer from './users_reducer'

const entitiesReducer = combineReducers({
    users: {},
    books: booksReducer,
    forums: forumsReducer,
    bookclubs: bookclub_reducer
})


export default entitiesReducer