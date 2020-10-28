import Axios from "axios";

// export const fetchBook = (bookId) => {
//     return Axios.get(`/api/books/${bookId}`)
// };

export const fetchAllPosts = () => {
    return Axios.get("/api/posts/")
};