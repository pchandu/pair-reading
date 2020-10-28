import axios from "axios";

export const fetchForums = () => {
    return axios.get('/api/forums')
}