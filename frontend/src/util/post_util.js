import Axios from "axios";

export const fetchAllPosts = (filters) => {
    return Axios.get("/api/posts/",{params:filters})
};
export const fetchPost = (id) => {
    return Axios.get(`/api/posts/${id}`)
};

export const fetchAllForumPosts = (id) => {
    return Axios.get(`/api/forums/${id}/posts`)
};
export const fetchAllUserPosts = (id) => {
    return Axios.get(`/api/users/${id}/posts`)
};
