import axios from "axios";

const API = axios.create({
  baseURL: "http://112.167.178.26:50000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

/* Login */
export const tryLogin = async (data) => await API.post('/user/login', data);

export default API;