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
export const getSecurityList = async () => await API.get('/security_result/bibimResultList');
export const getProjectSecurityResult = async (id) => await API.get(`/projectTotalSecurityResult/${id}`);
export const getStageIssueCount = async () => await API.get('/security_result/dashboardStageIssueCount');
export const allProjectPrecisionCount = async () => await API.get('/security_result/allProjectPrecisionCount');
export const projectPrecisionCount = async (pipelineName) => await API.get(`/security_result/projectPrecisionCount/${pipelineName}`);


/* Get Security Check List */
export const getToolList = async () => await API.get('/tool/toolList');


/* Pipeline */
export const createPipeline = async (data) => await API.post('/pipeline/createPipeline', data);
export const deletePipeline = async (data) => await API.post('/pipeline/deletePipeline', data);
export const runPipeline = async (data) => await API.post('/pipeline/runPipeline', data);
export const stopPipeline = async (data) => await API.post('/pipeline/stopPipeline', data);
export const getPipelineList = async () => await API.get('/pipeline/pipelineList');
export const getPipeline = async (data) => await API.post('/pipeline/getPipeline', data);
export const getStream = async (data) => await API.post('/pipeline/getStream', data);

/* JenkinsFile */
export const getJenkinslist = async () => await API.get('/pipeline/getJenkinsfiles');

export default API;