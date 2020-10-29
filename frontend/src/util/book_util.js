import Axios from "axios";

// export const fetchBook = (bookId) => {
//     return Axios.get(`/api/books/${bookId}`)
// };

export const fetchBooks = (filters) => {
    // debugger
    return Axios.get("/api/books",{params: filters})
};
export const fetchBook = (id) => {
    // debugger
    return Axios.get(`/api/books/${id}`)
};

