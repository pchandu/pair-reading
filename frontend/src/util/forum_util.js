import Axios from "axios";

export const fetchAllForums = () => {
    return Axios.get("/api/forums/")
};