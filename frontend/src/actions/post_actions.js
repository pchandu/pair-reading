import * as postUtil from '../util/post_util'
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS'

export const receiveAllPosts = payload => ({
    type: RECEIVE_ALL_POSTS,
    payload
});

export const fetchAllPosts = () => dispatch => postUtil.fetchAllPosts()
    .then((posts) => {
        dispatch(receiveAllPosts(posts))
    });