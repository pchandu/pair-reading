import Axios from "axios";

export const fetchUser = (id) => {
    return Axios.get(`/api/users/${id}`)
};
export const fetchBookClubUsers = (id) => {
    return Axios.get(`/api/bookclubs/${id}/users`)
};
export const fetchBookUsers = (id) => {
    return Axios.get(`/api/books/${id}/readers`)
};
