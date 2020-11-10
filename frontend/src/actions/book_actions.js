import * as BookUtil from '../util/book_util'
export const RECEIVE_ALL_BOOKS = 'RECEIVE_ALL_BOOKS'
export const RECEIVE_BOOK = 'RECEIVE_BOOK'
export const REMOVE_ALL_BOOKS = 'REMOVE_ALL_BOOKS'


export const receiveBook = payload => ({
    type: RECEIVE_BOOK, 
    payload
});
export const receiveAllBooks = payload => ({
    type: RECEIVE_ALL_BOOKS, 
    payload
});

export const removeAllBooks = () => ({
    type: REMOVE_ALL_BOOKS
});

export const fetchAllBooks = (filters) => dispatch =>
    BookUtil.fetchBooks(filters)
    .then((books) => (
        dispatch(receiveAllBooks(books))
    ));
export const fetchBook = (id) => dispatch =>
    BookUtil.fetchBook(id)
    .then((book) => (
        dispatch(receiveBook(book))
    ));

export const fetchUserBooks = (filters) => (userId) => dispatch =>
    BookUtil.fetchUserBooks(filters)(userId)
    .then(books => dispatch(receiveAllBooks(books)))

export const fetchBookClubBooks = (filters) => (bcId) => dispatch =>
    BookUtil.fetchBookClubBooks(filters)(bcId)
    .then(books => dispatch(receiveAllBooks(books)))
