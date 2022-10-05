import { useEffect, useState } from "react";
import Collapse from "@mui/material/Collapse";
import styles from "./DevHome.module.css";

function DevHome() {
  const [build, setBuild] = useState(0);
  const [complete, setComplete] = useState(0);
  const [fail, setFail] = useState(0);
  const [deploy, setDeploy] = useState(0);

  const getStatus = async () => {
    // Status 가져오기
  }

  return (
    //Project에 따라서 검사(test)중, 검사완료인지, 배포중인지 등등 보여줘야함.
		<div className={styles.container}>
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
	);
}

export default DevHome;
