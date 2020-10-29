import * as postUtil from '../util/post_util'
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'

export const receiveAllPosts = payload => ({
    type: RECEIVE_ALL_POSTS,
    payload
});
export const receivePost = payload => ({
    type: RECEIVE_POST,
    payload
});


export const fetchAllPosts = (filters) => dispatch =>
postUtil.fetchAllPosts(filters)
.then((posts) => {
    dispatch(receiveAllPosts(posts))
});
export const fetchPost = (id) => dispatch =>
    postUtil.fetchPost(id)
        .then((book) => (
            dispatch(receivePost(book))
        ));
export const fetchAllForumPosts = (forumId) => dispatch =>
postUtil.fetchAllForumPosts(forumId)
    .then((posts) => {
        dispatch(receiveAllPosts(posts))
    });
export const fetchAllUserPosts = (userId) => dispatch =>
postUtil.fetchAllUserPosts(userId)
    .then((posts) => {
        dispatch(receiveAllPosts(posts))
    });
