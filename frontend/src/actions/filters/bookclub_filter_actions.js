import { fetchAllBookClubs } from '../bookclub_actions'

export const UPDATE_BOOKCLUBS_FILTER = 'UPDATE_BOOKCLUBS_FILTER';
export const CLEAR_BOOKCLUBS_FILTER = 'CLEAR_BOOKCLUBS_FILTER';

export const changeBookclubsFilter = (filter, value) => ({
    type: UPDATE_BOOKCLUBS_FILTER,
    filter,
    value
});
export const clearBookclubsFilter = () => ({
    type: CLEAR_BOOKCLUBS_FILTER
})
export const fetchFilteredBookclubs = () => (dispatch, getState) => {
    // debugger
    return fetchAllBookClubs(getState().ui.filters.bookclubs)(dispatch);
};
