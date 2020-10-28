import * as BookUtil from '../util/book_util'
export const RECEIVE_ALL_BOOKS = 'RECEIVE_ALL_BOOKS'
// export const RECEIVE_BOOK = 'RECEIVE_BOOK'

// export const receiveBook = payload => ({
//     type: RECEIVE_BOOK, 
//     payload
// });

// export const fetchBook = bookId => dispatch => BookUtil.fetchBook(bookId)
//     .then(book => dispatch(receiveBook(book)));

export const receiveAllBooks = payload => ({
    type: RECEIVE_ALL_BOOKS, 
    payload
});

export const fetchAllBooks = () => dispatch => BookUtil.fetchBooks()
    .then((books) => {
        dispatch(receiveAllBooks(books))
    });