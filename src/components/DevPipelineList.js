import { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import styles from "./DevPipelineList.module.css";

function Row(item) {
  const {row} = item;
  const [open, setOpen] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [repositoryUrl, setRepositoryUrl] = useState("");
  const [jenkinsFile, setJenkinsFile] = useState("");

  const onHandleEdit = () => {
    // Pipeline 수정 axios 통신
    
  }
  return (
    <>
      <TableRow>
        <TableCell>{row.pipeline_name}</TableCell>
        <TableCell>{row.repo_url}</TableCell>
        <TableCell>{row.jenkinsfile_path}</TableCell>
        <TableCell>{row.owner_id}</TableCell>
        <TableCell>{row.createAt}</TableCell>
        <TableCell>{row.updateAt}</TableCell>
        <TableCell><button onClick={() =>setOpen(!open)}>Edit</button></TableCell>
        <TableCell><button>Scan</button></TableCell>
      </TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open}>
            <Box className={styles.box} sx={{ margin: 1 }}>
              <div className={styles.container}>
                <div className={styles.lable}>
                  Project Name
                </div>
                <input onChange={(event) => {setProjectName(event.target.value)}} id="projectName" placeholder="Project Name"/>
              </div>
              <div className={styles.container}>
                <div className={styles.lable}>
                  Repository URL
                </div>
                <input onChange={(event) => {setRepositoryUrl(event.target.value)}} id="repository" placeholder="Repository URL"/>
              </div>
              <div className={styles.container}>
                <div className={styles.lable}>
                  Jenkins File
                </div>
                <input onChange={(event) => {setJenkinsFile(event.target.value)}} id="jenkins" placeholder="Jenkins File"/>
              </div>
              <div>
                <button value={row.pipeline_name} onClick={onHandleEdit}>Save</button>
              </div>
            </Box>
          </Collapse>
        </TableCell>
    </>
  );
}

function DevPipelineList({created, setCreated}) {
  const [pipelinesList, setPipelinesList] = useState([]);

  const getPipelineList = async () => {
    const response = await axios.get("http://112.167.178.26:50000/api/v1/pipeline/pipelineList");
    setPipelinesList(response.data.result);
  }
  useEffect(() => {
    getPipelineList();
  },[])

  if(created) {
    getPipelineList();
    setCreated(false);
  }
  return (
    <div>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Project Name</TableCell>
            <TableCell>Repository URL</TableCell>
            <TableCell>Jenkins File</TableCell>
            <TableCell>Owner</TableCell>
            <TableCell>Create Time</TableCell>
            <TableCell>Update Time</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Scan</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pipelinesList.reverse().map((item) => (
            <Row key={item.pipeline_name} row={item} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default DevPipelineList;