import { fetchAllForums } from '../forum_actions'

export const UPDATE_FORUMS_FILTER = 'UPDATE_FORUMS_FILTER';
export const CLEAR_FORUMS_FILTER = 'CLEAR_FORUMS_FILTER';

export const changeForumsFilter = (filter, value) => ({
    type: UPDATE_FORUMS_FILTER,
    filter,
    value
});
export const clearForumsFilter = () => ({
    type: CLEAR_FORUMS_FILTER
})
export const fetchFilteredForums = () => (dispatch, getState) => {
    return fetchAllForums(getState().ui.filters.forums)(dispatch);
};
