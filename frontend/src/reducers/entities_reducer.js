import { combineReducers } from 'redux';
import booksReducer from './books_reducer'
// import usersReducer from './users_reducer'

const entitiesReducer = combineReducers({
    users: {},
    books: booksReducer
})


export default entitiesReducer