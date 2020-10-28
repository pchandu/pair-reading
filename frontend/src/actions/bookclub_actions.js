import * as bookclubUtil from '../util/bookclub_util'
export const RECEIVE_ALL_BOOKCLUBS = 'RECEIVE_ALL_BOOKCLUBS'

export const receiveAllBookClubs = payload => ({
    type: RECEIVE_ALL_BOOKCLUBS,
    payload
});

export const fetchAllBookClubs = () => dispatch => bookclubUtil.fetchAllBookClubs()
    .then((bookclubs) => {
        dispatch(receiveAllBookClubs(bookclubs))
    });