import * as forumUtil from '../util/forum_util'
export const RECEIVE_ALL_FORUMS = 'RECEIVE_ALL_FORUMS'

export const receiveAllForums = payload => ({
    type: RECEIVE_ALL_FORUMS,
    payload
});

export const fetchAllForums = () => dispatch => forumUtil.fetchAllForums()
    .then((forums) => {
        dispatch(receiveAllForums(forums))
    });