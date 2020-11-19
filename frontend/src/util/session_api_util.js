
import axios from "axios";

export const setAuthToken = (token) => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = token;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
};

export const signup = (userData) => {
    return axios.post("/api/users/register", userData);
};

export const login = (userData) => {
    return axios.post("/api/users/login", userData);
};

export const updateUser = (updatedUser) => {
    return axios.patch("api/users/updateUser", updatedUser)
}

export const refreshUserInfo = (loggedInUser) => {
    return axios.post("api/users/refreshUserInfo", loggedInUser)
}

export const userFollowBook= (updatedUser) => {
  return axios.patch("api/users/userFollowBook", updatedUser);
};