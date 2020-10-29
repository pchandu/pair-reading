import * as bookclubUtil from '../util/bookclub_util'
export const RECEIVE_ALL_BOOKCLUBS = 'RECEIVE_ALL_BOOKCLUBS'
export const RECEIVE_BOOKCLUB = 'RECEIVE_BOOKCLUB'

export const receiveBookClub = payload => ({
    type: RECEIVE_BOOKCLUB,
    payload
});
export const receiveAllBookClubs = payload => ({
    type: RECEIVE_ALL_BOOKCLUBS,
    payload
});

export const fetchAllBookClubs = (filters) => dispatch =>
    bookclubUtil.fetchAllBookClubs(filters)
    .then((bookclubs) => {
        dispatch(receiveAllBookClubs(bookclubs))
    });
export const fetchBookClub = (id) => dispatch =>
    BookUtil.fetchBookClub(id)
        .then((book) => (
            dispatch(receiveBookClub(book))
        ));

export const fetchUserBookClubs = (filters) => (userId) => dispatch =>
    bookclubUtil.fetchUserBookClubs(filters)(userId)
    .then((bookclubs) => {
        dispatch(receiveAllBookClubs(bookclubs))
    });

export const fetchBookBookClubs = (filters) => (bookId) => dispatch =>
    bookclubUtil.fetchBookBookClubs(filters)(bookId)
    .then((bookclubs) => {
        dispatch(receiveAllBookClubs(bookclubs))
    });

