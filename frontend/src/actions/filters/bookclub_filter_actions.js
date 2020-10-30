import { fetchAllBookClubs, fetchUserBookClubs, fetchBookBookClubs } from '../bookclub_actions'

export const UPDATE_BOOKCLUBS_FILTER = 'UPDATE_BOOKCLUBS_FILTER';
export const CLEAR_BOOKCLUBS_FILTER = 'CLEAR_BOOKCLUBS_FILTER';

export const changeBookClubsFilter = (filter, value) => ({
    type: UPDATE_BOOKCLUBS_FILTER,
    filter,
    value
});
export const clearBookClubsFilter = () => ({
    type: CLEAR_BOOKCLUBS_FILTER
})
export const fetchFilteredBookClubs = () => (dispatch, getState) => {
    // debugger
    return fetchAllBookClubs(getState().ui.filters.bookclubs)(dispatch);
};
export const fetchFilteredUserBookClubs = (userId) => (dispatch, getState) => {
    return fetchUserBookClubs(getState().ui.filters.books)(userId)(dispatch);
};
export const fetchFilteredBookBookClubs = (bookId) => (dispatch, getState) => {
    return fetchBookBookClubs(getState().ui.filters.books)(bookId)(dispatch);
};
