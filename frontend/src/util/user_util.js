import Axios from "axios";

export const fetchAllUsers = () => {
    return Axios.get(`/api/users/`)
};
export const fetchUser = (id) => {
    return Axios.get(`/api/users/${id}`)
};
export const fetchBookClubUsers = (filters)=>(id) => {
    return Axios.get(`/api/bookclubs/${id}/users`,{params:filters})
};
export const fetchBookUsers = (filters)=>(id) => {
    return Axios.get(`/api/books/${id}/readers`, { params: filters })
};

export const fetchUserMatches = (filters) => (id) => {
    return Axios.get(`/api/users/${id}/matches`, { params: filters })
};
export const fetchUserTimeMatches = (filters) => (id) => {
    return Axios.get(`/api/users/${id}/timematches`, { params: filters })
};
export const fetchUserBookMatches = (filters) => (id) => {
    return Axios.get(`/api/users/${id}/bookmatches`, { params: filters })
};

// Calendar actions

export const createCalInvite = (inviteInfo) => {
    return Axios.post(`/api/users/createMeetingInvite`, {data: inviteInfo});
}


export const acceptCalInvite = (inviteInfo) => {
    return Axios.post(`/api/users/acceptCalInvite`, {data: inviteInfo})
}

export const denyCalInvite = (inviteInfo) => {
    return Axios.delete(`/api/users/denyCalInvite`, {data: inviteInfo})
}