import { useEffect, useState } from 'react';
import Collapse from '@mui/material/Collapse';
import styles from "./DevHome.module.css";

function DevHome() {
  const [test, setTest] = useState(false);
  const [complete, setComplete] = useState(false);
  const [deploy, setDeploy] = useState(false);

  return (
    //Project에 따라서 검사(test)중, 검사완료인지, 배포중인지 등등 보여줘야함.
    <div className={styles.container}>
      <div className={styles.header}>DashBoard</div>
      <div className={styles.status}>
        <div className={styles.statusBox}><div>빌드</div><div>1</div></div>
        <div className={styles.statusBox}><div>완료</div><div>1</div></div>
        <div className={styles.statusBox}><div>실패</div><div>1</div></div>
        <div className={styles.statusBox}><div>배포</div><div>1</div></div>
      </div>
      <div className={styles.box} onClick={() =>setTest(prev => !prev)}>
        <h2 >Test</h2>
        <button className={styles.btn}>V</button>
      </div>
      <Collapse in={test}>
          <div className={styles.collapseDiv}>Test</div>
      </Collapse>
      <div className={styles.box} onClick={() => setComplete(prev => !prev)}>
        <h2>Complete</h2>
        <button className={styles.btn}>V</button>
      </div>
      <Collapse in={complete}>
          <div className={styles.collapseDiv}>Complete</div>
      </Collapse>
      <div className={styles.box} onClick={() => setDeploy(prev => !prev)}>
        <h2>Deploy</h2>
        <button className={styles.btn}>V</button>
      </div>
      <Collapse in={deploy}>
          <div className={styles.collapseDiv}>Deploy</div>
      </Collapse>
    </div>

  );
}

export default DevHome;