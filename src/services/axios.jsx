import axios from "axios";

const API = axios.create({
  baseURL: "http://112.167.178.26:52200/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

/* Login */
export const tryLogin = async (data) => await API.post('/user/login', data);


/* Security Result */
export const getSecurityList = async (id) => await API.get('/security_result/securityResultList')

export default API;