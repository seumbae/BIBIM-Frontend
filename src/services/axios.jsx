import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER_BASEURL,
  headers: {
    "Content-Type": "application/json",
  },
});

/* Login */
export const tryLogin = async (data) => await API.post('/user/login', data);

/* Security Result */
export const getSecurityList = async () => await API.get('/security_result/securityResultList');
export const getProjectSecurityResult = async (id) => await API.get(`/projectTotalSecurityResult/${id}`);

/* Get Security Check List */
export const getToolList = async () => await API.get('/tool/toolList');


/* Pipeline */
export const createPipeline = async (data) => await API.post('/pipeline/createPipeline', data);
export const deletePipeline = async (data) => await API.post('/pipeline/deletePipeline', data);
export const runPipeline = async (data) => await API.post('/pipeline/runPipeline', data);
export const getPipeline = async () => await API.get('/pipeline/pipelineList');


export default API;