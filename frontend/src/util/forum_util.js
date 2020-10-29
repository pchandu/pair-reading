import Axios from "axios";

export const fetchAllForums = (filters) => {
    return Axios.get("/api/forums/",{params:filters})
};
export const fetchBookForums = (filters) => (bookId) => {
    return Axios.get(`/api/books/${bookId}/forums`, { params: filters })
};
export const fetchBookClubForums = (filters) => (bcId) => {
    return Axios.get(`/api/bookclubs/${bcId}/forums`, { params: filters })
};

