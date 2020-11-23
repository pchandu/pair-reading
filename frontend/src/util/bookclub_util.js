import Axios from "axios";

export const fetchAllBookClubs = (filters) => {
    return Axios.get("/api/bookclubs/",{params: filters})
};
export const fetchBookClub = (id) => {
    return Axios.get(`/api/bookclubs/${id}`)
};
export const fetchUserBookClubs = (filters) => (userId) => {
    return Axios.get(`/api/users/${userId}/bookclubs`,{params:filters})
};
export const fetchBookBookClubs = filters => (bookId) => {
    return Axios.get(`/api/books/${bookId}/bookclubs`, { params: filters })
};

export const makeBookClub = (bookClubData) => {
    return Axios.post(`/api/bookclubs/createBookClub`, bookClubData)
}

export const deleteBookClub = (bookClubData) => {
    return Axios.delete(`/api/bookclubs/deleteBookClub`, {data: bookClubData})
}

export const joinBookClub = (bookClubData) => {
    return Axios.post(`/api/bookclubs/joinBookClub`, bookClubData)
}

export const denyBookClub = (bookClubData) => {
    return Axios.delete(`/api/bookclubs/denyBookClub`, {data: bookClubData} )
}

export const inviteToBookClub = (invite) => {
    return Axios.post(`/api/bookclubs/inviteToBookClub`, invite)
}
