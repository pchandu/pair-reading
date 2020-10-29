import { fetchAllBooks } from '../book_actions'

export const UPDATE_BOOKS_FILTER = 'UPDATE_BOOKS_FILTER';

export const changeRoutesFilter = (filter, value) => ({
    type: UPDATE_BOOKS_FILTER,
    filter,
    value
});
export const clearRoutesFilter = () => ({
    type: CLEAR_ACTIVITIES_FILTER
})
export const fetchFilteredBooks = () => (dispatch, getState) => {
    return fetchAllBooks(getState().ui.filters.books)()(dispatch);
};
