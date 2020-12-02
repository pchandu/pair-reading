import * as postUtil from '../util/post_util'
export const RECEIVE_NEW_POST = 'RECEIVE_NEW_POST'
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'
export const DELETE_POST = 'DELETE_POST'

export const receiveAllPosts = payload => ({
    type: RECEIVE_ALL_POSTS,
    payload
});
export const receivePost = payload => ({
    type: RECEIVE_POST,
    payload
});
export const receiveNewPost = payload => ({
    type: RECEIVE_NEW_POST,
    payload
});
export const removePost = (postId) => ({
    type: DELETE_POST,
    postId
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
export const fetchAllForumPosts = (filters) => (forumId) => dispatch =>
postUtil.fetchAllForumPosts(filters)(forumId)
    .then((posts) => {
        dispatch(receiveAllPosts(posts))
    });
export const fetchAllUserPosts = filters => (userId) => dispatch =>
postUtil.fetchAllUserPosts(filters)(userId)
    .then((posts) => {
        dispatch(receiveAllPosts(posts))
    });
//! POST
export const composePost = data => dispatch => (
postUtil.composePost(data)
    .then(post => dispatch(receiveNewPost(post)))
    .catch(err => console.log(err))
);
export const deletePost = id => dispatch => (
postUtil.deletePost(id)
    .then(msg => dispatch(removePost(id)))
    .catch(err => console.log(err))
)
export const updatePost = id => data => dispatch => (
postUtil.updatePost(id)(data)
    .then(post => dispatch(receivePost(post)))
    .catch(err => console.log(err))
)