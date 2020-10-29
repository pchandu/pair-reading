import { fetchAllBooks } from '../book_actions'
export const UPDATE_BOOKS_FILTER = 'UPDATE_BOOKS_FILTER';
export const CLEAR_BOOKS_FILTER = 'CLEAR_BOOKS_FILTER';

export const changeBooksFilter = (filter, value) => ({
    type: UPDATE_BOOKS_FILTER,
    filter,
    value
});
export const clearBooksFilter = () => ({
    type: CLEAR_BOOKS_FILTER
})
export const fetchFilteredBooks = () => (dispatch, getState) => {
    return fetchAllBooks(getState().ui.filters.books)(dispatch);
};
