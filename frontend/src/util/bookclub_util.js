import Axios from "axios";

export const fetchAllBookClubs = (filters) => {
    // debugger
    return Axios.get("/api/bookclubs/",{params: filters})
};
export const fetchBookClub = (id) => {
    return Axios.get(`/api/bookclubs/${id}`)
};
export const fetchUserBookClubs = (userId) => {
    return Axios.get(`/api/users/${userId}/bookclubs`)
};
export const fetchBookBookClubs = (bookId) => {
    return Axios.get(`/api/books/${bookId}/bookclubs`)
};

