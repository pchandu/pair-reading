import { fetchUserActivities } from './activity_actions'

export const UPDATE_ROUTES_FILTER = 'UPDATE_ROUTES_FILTER';
export const UPDATE_ACTIVITIES_FILTER = 'UPDATE_ACTIVITIES_FILTER';

export const changeRoutesFilter = (filter, value) => ({
    type: UPDATE_ROUTES_FILTER,
    filter,
    value
});
export const clearRoutesFilter = () => ({
    type: CLEAR_ACTIVITIES_FILTER
})
export const fetchFilteredUserActivities = userId => (dispatch, getState) => {
    return fetchUserActivities(getState().ui.filters.activity)(userId)(dispatch);
};
