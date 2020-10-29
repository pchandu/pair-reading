import Axios from "axios";

// export const fetchBook = (bookId) => {
//     return Axios.get(`/api/books/${bookId}`)
// };

export const fetchAllPosts = (filters) => {
    return Axios.get("/api/posts/",{params:filters})
};

export const fetchAllForumPosts = (id) => {
    return Axios.get(`/api/forums/${id}/posts`)
};
