import { fetchAllPosts, fetchAllForumPosts, fetchAllUserPosts } from '../post_actions'

export const UPDATE_POSTS_FILTER = 'UPDATE_POSTS_FILTER';
export const CLEAR_POSTS_FILTER = 'CLEAR_POSTS_FILTER';

export const changePostsFilter = (filter, value) => ({
    type: UPDATE_POSTS_FILTER,
    filter,
    value
});
export const clearPostsFilter = () => ({
    type: CLEAR_POSTS_FILTER
})
export const fetchFilteredPosts = () => (dispatch, getState) => {
    return fetchAllPosts(getState().ui.filters.posts)(dispatch);
};
export const fetchFilteredForumPosts = (forumId) => (dispatch, getState) => {
    return fetchAllForumPosts(getState().ui.filters.posts)(forumId)(dispatch);
};
export const fetchFilteredUserPosts = (userId) => (dispatch, getState) => {
    return fetchAllUserPosts(getState().ui.filters.posts)(userId)(dispatch);
};
