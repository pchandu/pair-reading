import Axios from "axios";

// export const fetchBook = (bookId) => {
//     return Axios.get(`/api/books/${bookId}`)
// };

export const fetchAllBookClubs = (filters) => {
    // debugger
    return Axios.get("/api/bookclubs/",{params: filters})
};
export const fetchBookClub = (id) => {
    return Axios.get(`/api/bookclubs/${id}`)
};