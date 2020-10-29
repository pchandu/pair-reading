import Axios from "axios";

export const fetchAllForums = () => {
    return Axios.get("/api/forums/")
};
export const fetchAllForumPosts = (id) => {
    return Axios.get(`/api/forums/${id}/posts`)
};

