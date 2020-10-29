import * as forumUtil from '../util/forum_util'
export const RECEIVE_ALL_FORUMS = 'RECEIVE_ALL_FORUMS'
export const RECEIVE_FORUM = 'RECEIVE_FORUM'

export const receiveForum = payload => ({
    type: RECEIVE_FORUM,
    payload
});
export const receiveAllForums = payload => ({
    type: RECEIVE_ALL_FORUMS,
    payload
});

export const fetchAllForums = (filters) => dispatch =>
    forumUtil.fetchAllForums(filters)
    .then((forums) => {
        dispatch(receiveAllForums(forums))
    });
export const fetchForum = (id) => dispatch =>
    forumUtil.fetchForum(id)
    .then((forum) => {
        dispatch(receiveForum(forum))
    });

export const fetchBookForums = (filters) => (bookId) => dispatch =>
    forumUtil.fetchBookForums(filters)(bookId)
    .then((forums) => {
        dispatch(receiveAllForums(forums))
    });
export const fetchBookClubForums = (filters) => (bookclubId) => dispatch =>
    forumUtil.fetchBookClubForums(filters)(bookclubId)
    .then((forums) => {
        dispatch(receiveAllForums(forums))
    });

