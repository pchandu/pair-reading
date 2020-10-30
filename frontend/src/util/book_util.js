import Axios from "axios";

export const fetchBooks = (filters) => {
    // debugger
    return Axios.get("/api/books",{params: filters})
};
export const fetchBook = (id) => {
    // debugger
    return Axios.get(`/api/books/${id}`)
};
export const fetchUserBooks = (filters) => (userId) => {
    return Axios.get(`/api/users/${userId}/books`, { params: filters })
};
export const fetchBookClubBooks = (filters) => (bcId) => {
    return Axios.get(`/api/bookclubs/${bcId}/books`, { params: filters })
};

