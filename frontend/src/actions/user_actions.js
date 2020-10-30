import * as UserUtil from '../util/user_util'
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS'
export const RECEIVE_USER = 'RECEIVE_USER'

export const receiveUser = payload => ({
    type: RECEIVE_USER, 
    payload
});
export const receiveAllUsers = payload => ({
    type: RECEIVE_ALL_USERS, 
    payload
});

export const fetchAllUsers = (filters) => dispatch =>
    UserUtil.fetchAllUsers(filters)
    .then((users) => (
        dispatch(receiveAllUsers(users))
    ));
export const fetchUser = (id) => dispatch =>
    UserUtil.fetchUser(id)
    .then((user) => (
        dispatch(receiveUser(user))
    ));

export const fetchBookClubUsers = (filters) => (id) => dispatch =>
    UserUtil.fetchBookClubUsers(filters)(id)
    .then(users => dispatch(receiveAllUsers(users)))
    
export const fetchBookUsers = (filters) => (id) => dispatch =>
    UserUtil.fetchBookUsers(filters)(id)
    .then(users => dispatch(receiveAllUsers(users)))

export const fetchUserMatches = (filters) => (userId) => dispatch =>
    UserUtil.fetchUserMatches(filters)(userId)
    .then(users => dispatch(receiveAllUsers(users)))
export const fetchUserTimeMatches = (filters) => (userId) => dispatch =>
    UserUtil.fetchUserTimeMatches(filters)(userId)
    .then(users => dispatch(receiveAllUsers(users)))
export const fetchUserBookMatches = (filters) => (userId) => dispatch =>
    UserUtil.fetchUserBookMatches(filters)(userId)
    .then(users => dispatch(receiveAllUsers(users)))

