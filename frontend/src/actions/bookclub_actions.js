import * as bookclubUtil from '../util/bookclub_util'
export const RECEIVE_ALL_BOOKCLUBS = 'RECEIVE_ALL_BOOKCLUBS'

export const receiveAllBookClubs = payload => ({
    type: RECEIVE_ALL_BOOKCLUBS,
    payload
});

export const fetchAllBookClubs = (filters) => dispatch =>
    bookclubUtil.fetchAllBookClubs(filters)
    .then((bookclubs) => {
        dispatch(receiveAllBookClubs(bookclubs))
    });