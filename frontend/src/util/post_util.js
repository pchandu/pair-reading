import Axios from "axios";

export const fetchAllPosts = (filters) => {
    return Axios.get("/api/posts/",{params:filters})
};
export const fetchPost = (id) => {
    return Axios.get(`/api/posts/${id}`)
};

export const fetchAllForumPosts = filters => (id) => {
    return Axios.get(`/api/forums/${id}/posts`,{params: filters})
};
export const fetchAllUserPosts = filters => (id) => {
    return Axios.get(`/api/users/${id}/posts`, { params: filters })
};

//!
export const composePost = data => {
    debugger
    return Axios.post('/api/posts/', data )
}