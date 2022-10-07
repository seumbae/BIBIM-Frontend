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
import styles from "../styles/DevPipelineList.module.css";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

function Row({row, setDeleted}) {
  // const {row} = item;
  const [open, setOpen] = useState(false);
  const [projectName, setProjectName] = useState(row.pipeline_name);
  const [repositoryUrl, setRepositoryUrl] = useState(row.repo_url);
  const [jenkinsFile, setJenkinsFile] = useState("");

  const onHandleEdit = async () => {
    // Pipeline 수정 axios 통신
    const response = await axios.post(
      `http://112.167.178.26:50000/api/v1/pipeline/deletePipeline/${row.id}`,
      null,
      {
        params: {
          pipeline_name : row.pipeline_name,
          repo_url : row.repo_url,
          jenkinsfile_path_depoloy : row.jenkinsfile_path_depoloy,
          jenkinsfile_path_security : row.jenkinsfile_path_security,
          owner_id : row.owner_id,
        },
        header: { "Context-Type": "application/json" },
      }
    )
    
  }
  const onHandleRemove = async (event) => {
    // Pipeline 삭제 axios 통신
		const response = await axios.post(
			`http://112.167.178.26:50000/api/v1/pipeline/deletePipeline/${event.target.id}`,
      null,
      {
        // 안됨
        // params: {
        //   id: event.target.id,
        // },
				header: { "Context-Type": "application/json" },
			}
		);
    if(response?.data.status === 200){
      alert("delete success");
    }
    else if(response?.data.status === 400){
      alert("delete fail");
    }
    else if(response?.data.status === 500){
      alert("server error");
    }
    else{
      alert("unknown error");
    }
    setDeleted(true);
  }

  return (
    <>
      <TableRow>
        <TableCell>{row.pipeline_name}</TableCell>
        <TableCell>{row.repo_url}</TableCell>
        <TableCell>{row.owner_id}</TableCell>
        <TableCell>{row.createAt}</TableCell>
        <TableCell>{row.updateAt}</TableCell>
        <TableCell><PlayArrowRoundedIcon className={styles.icon} color="success" sx={{ fontSize: 30 }}/></TableCell>
        <TableCell><EditIcon className={styles.icon} onClick={() =>setOpen(!open)}/></TableCell>
        <TableCell><DeleteIcon className={styles.icon} id={row.id} onClick={(event) =>onHandleRemove(event)}/></TableCell>
      </TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open}>
            <Box className={styles.box} sx={{ margin: 1 }}>
              <div className={styles.inputWrapper}>
                <div className={styles.lable}>Project name</div>
                <div><input className={styles.input} type="text" value={projectName} onChange={(event) => setProjectName(event.target.value)} /></div>
              </div>
              <div className={styles.inputWrapper}>
                <div className={styles.lable}>Repository url</div>
                <div><input className={styles.input} type="text" value={repositoryUrl} onChange={(event) => setRepositoryUrl(event.target.value)} /></div>
              </div>
              <div className={`${styles.icon} ${styles.save}`}>
                <SaveAltIcon className={styles.icon} fontSize="small" value={row.pipeline_name} onClick={onHandleEdit}/>
                <span>Save</span>
              </div>
            </Box>
          </Collapse>
        </TableCell>
    </>
  );
}

function DevPipelineList({created, setCreated}) {
  const [pipelinesList, setPipelinesList] = useState([]);
  const [deleted, setDeleted] = useState(false);

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
  if(deleted) {
    getPipelineList();
    setDeleted(false);
  }

  return (
    <div>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Project Name</TableCell>
            <TableCell>Repository URL</TableCell>
            <TableCell>Owner</TableCell>
            <TableCell>Create Time</TableCell>
            <TableCell>Update Time</TableCell>
            <TableCell>Scan</TableCell>
            <TableCell> </TableCell>
            <TableCell> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pipelinesList.reverse().map((item) => (
            <Row key={item.id} row={item} setDeleted={setDeleted} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default DevPipelineList;