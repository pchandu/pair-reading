import { fetchAllUsers, fetchBookClubUsers, fetchBookUsers, fetchUserMatches,fetchUserTimeMatches,fetchUserBookMatches } from '../user_actions'
export const UPDATE_USERS_FILTER = 'UPDATE_USERS_FILTER';
export const CLEAR_USERS_FILTER = 'CLEAR_USERS_FILTER';

export const changeUsersFilter = (filter, value) => ({
    type: UPDATE_USERS_FILTER,
    filter,
    value
});
export const clearUsersFilter = () => ({
    type: CLEAR_USERS_FILTER
})
export const fetchFilteredUsers = () => (dispatch, getState) => {
    return fetchAllUsers(getState().ui.filters.users)(dispatch);
};
export const fetchFilteredBookClubUsers = (bId) => (dispatch, getState) => {
    return fetchBookClubUsers(getState().ui.filters.users)(bId)(dispatch);
};
export const fetchFilteredBookUsers = (bId) => (dispatch, getState) => {
    return fetchBookUsers(getState().ui.filters.users)(bId)(dispatch);
};
export const fetchFilteredUserMatches = (userId) => (dispatch, getState) => {
    return fetchUserMatches(getState().ui.filters.users)(userId)(dispatch);
};
export const fetchFilteredUserTimeMatches = (userId) => (dispatch, getState) => {
    return fetchUserTimeMatches(getState().ui.filters.users)(userId)(dispatch);
};
export const fetchFilteredUserBookMatches = (userId) => (dispatch, getState) => {
    return fetchUserBookMatches(getState().ui.filters.users)(userId)(dispatch);
}; 