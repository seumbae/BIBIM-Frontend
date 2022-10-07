import { useEffect, useState } from "react";
import Collapse from "@mui/material/Collapse";
import styles from "../styles/DevHome.module.css";
import axios from "axios";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

function Row({row}) {
	const requestBuild =() => {
		//axios로 build 요청 보내기
	}
  return (
    <tr>
      <td>{row.pipeline_name}</td>
      <td> - </td>
			<td> - </td>
			<td><PlayArrowRoundedIcon onClick={requestBuild} className={styles.icon} color="success" sx={{ fontSize: 30 }}/></td>
    </tr>
  );
}

function DevHome() {
  const [build, setBuild] = useState(0);
  const [complete, setComplete] = useState(0);
  const [fail, setFail] = useState(0);
  const [deploy, setDeploy] = useState(0);
	const [pipelinesList, setPipelinesList] = useState([]);

  const getPipelineList = async () => {
    const response = await axios.get("http://112.167.178.26:50000/api/v1/pipeline/pipelineList");
    setPipelinesList(response.data.result);
  }

  const getStatus = async () => {
    // Status 가져오기
  }
	useEffect(() => {
		getPipelineList();
	}, []);
  return (
    //Project에 따라서 검사(test)중, 검사완료인지, 배포중인지 등등 보여줘야함.
		<div className={styles.container}>
			<div className={styles.dashboard}>
				<div className={styles.header}>DashBoard</div>
				<div className={styles.status}>
					<div className={styles.statusBox}>
						<div className={styles.boxLable}>Build</div>
						<div className={styles.lableStatus}>{build}</div>
					</div>
					<div className={styles.statusBox}>
						<div className={styles.boxLable}>Complete</div>
						<div className={styles.lableStatus}>{complete}</div>
					</div>
					<div className={styles.statusBox}>
						<div className={styles.boxLable}>Fail</div>
						<div className={styles.lableStatus}>{fail}</div>
					</div>
					<div className={styles.statusBox}>
						<div className={styles.boxLable}>Deploy</div>
						<div className={styles.lableStatus}>{deploy}</div>
					</div>
				</div>
			</div>

			<table className={styles.table}>
        <thead className={styles.thead}>
          <th>Project name</th>
          <th>Recent result</th>
          <th>Elapsed Time</th>
          <th> </th>
        </thead>
        <tbody className={styles.tbody}>
          {pipelinesList.map((item) => (
            <Row key={item.id} row={item} />
          ))}
        </tbody>
      </table>
		</div>
	);
}

export default DevHome;
