import { useState, useEffect } from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import styles from "./DevJenkinsFileList.module.css";
function Row(item) {
  const {row} = item;

  const onHandleEdit = () => {
    // Jenkins 수정 axios 통신
  }
  return (
    <div>
      <TableRow>
        <TableCell>{row.pipeline_name}</TableCell>
        <TableCell>{row.repo_url}</TableCell>
        <TableCell>{row.jenkinsfile_path}</TableCell>
        <TableCell>{row.owner_id}</TableCell>
        <TableCell>{row.createAt}</TableCell>
        <TableCell>{row.updateAt}</TableCell>
      </TableRow>
    </div>
  );
}

function DevJenkinsFileList() {
  const [jenkinsList, setJenkinsList] = useState([]);

  const getPipelineList = async () => {
    // const response = await axios.get("http://112.167.178.26:50000/api/v1/pipeline/pipelineList");
    // setJenkinsList(response.data.result);
  }
  useEffect(() => {
    getPipelineList();
  },[])
  return (
    <div className={styles.container}>
      <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Jenkins File</TableCell>
            <TableCell>Owner</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jenkinsList.map((item) => (
            <Row key={item.pipeline_name} row={item} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default DevJenkinsFileList;