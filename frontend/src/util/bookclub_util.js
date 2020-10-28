import Axios from "axios";

// export const fetchBook = (bookId) => {
//     return Axios.get(`/api/books/${bookId}`)
// };

export const fetchAllBookClubs = () => {
    return Axios.get("/api/bookclubs/")
};