import styles from "../styles/DevJenkinsList.module.css";
import { useEffect, useState } from "react";
// import axios from "axios";
import axios from '../api/axios';
import DeleteIcon from '@mui/icons-material/Delete';


// API 만들어지면 변경할 예정
const SIGNIN_URL = "/api/jenkins";

function Row({row}) {
  const onClickDelete = () => {
    console.log("clicked");
  }
  return (
    <tr>
      <td>{row.file_name}</td>
      <td>{row.owner}</td>
      <td><DeleteIcon className={styles.icon} onClick={onClickDelete}fontSize="small"/></td>
    </tr>
  );

}

function DevJenkins() {
  const [jenkins, setJenkins] = useState([]);
  
  const getJenkinsFile = async () => {
    // const response = await axios.get("http://112.167.178.26:50000/api/v1/jenkins");
    const response = await axios.get(SIGNIN_URL);
    setJenkins(response.data);
  }
  useEffect(() => {
    getJenkinsFile();
  }, []);

  return (
  <div>
    <div>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <th>Jenkins Files</th>
          <th>Owner</th>
          <th> </th>
        </thead>
        <tbody className={styles.tbody}>
          {jenkins.map((item) => (
            <Row key={item.id} row={item} />
          ))}
        </tbody>
      </table>
    </div>


  </div>);
}

export default DevJenkins;