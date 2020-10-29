import Axios from "axios";

export const fetchAllForums = (filters) => {
    return Axios.get("/api/forums/",{params:filters})
};
export const fetchAllForumPosts = (id) => {
    return Axios.get(`/api/forums/${id}/posts`)
};

