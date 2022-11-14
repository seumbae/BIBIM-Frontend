import axios from "axios";

const API = axios.create({
  baseURL: process.env.API_SERVER_BASEURL,
  headers: {
    "Content-Type": "application/json",
  },
});

/* Login */
export const tryLogin = async (data) => await API.post('/user/login', data);


/* Security Result */
export const getSecurityList = async () => await API.get('/security_result/securityResultList');
export const getProjectSecurityResult = async () => await API.get();

export default API;