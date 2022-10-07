import styles from "../styles/DevResult.module.css";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from "react";
import Collapse from '@mui/material/Collapse';

function DevResult() {
  const [sisOpen, setSisOpen] = useState(false);
  const [sastOpen, setSastOpen] = useState(false);
  const [dastOpen, setDastOpen] = useState(false);
  const [scaOpen, setScaOpen] = useState(false);
 
  return (
    <div>
      <header>
				<div className={styles.header}>Result</div>
			</header>
      <main className={styles.main}>
        <div>
          <div className={`${styles.box} ${sisOpen ? styles.open : null}`}>
           <div className={styles.lable}>SIS</div>
           {sisOpen ? <ExpandLessIcon className={styles.btn}  onClick={(prev) => setSisOpen(prev => !prev)}/> : <ExpandMoreIcon className={styles.btn}  onClick={(prev) => setSisOpen(prev => !prev)}/>}
          </div>
          <Collapse in={sisOpen}>
            <div className={styles.collapseContainer}>Sis 결과보여주기</div>
          </Collapse>
        </div>
        <div>
          <div className={`${styles.box} ${sastOpen ? styles.open : null}`}>
            <div className={styles.lable}>SAST</div>
            {sastOpen? <ExpandLessIcon className={styles.btn}  onClick={(prev) => setSastOpen(prev => !prev)}/> : <ExpandMoreIcon className={styles.btn}  onClick={(prev) => setSastOpen(prev => !prev)}/>}
          </div>
          <Collapse in={sastOpen}>
            <div className={styles.collapseContainer}>Sast 결과보여주기</div>
          </Collapse>
        </div>
        <div>
          <div  className={`${styles.box} ${dastOpen ? styles.open : null}`}>
            <div className={styles.lable}>DAST</div>
            {dastOpen? <ExpandLessIcon className={styles.btn}  onClick={(prev) => setDastOpen(prev => !prev)}/>: <ExpandMoreIcon className={styles.btn}  onClick={(prev) => setDastOpen(prev => !prev)}/>}
          </div>
          <Collapse in={dastOpen}>
            <div className={styles.collapseContainer}>Dast 결과보여주기</div>
          </Collapse>
        </div>
        <div>
          <div className={`${styles.box} ${scaOpen ? styles.open : null}`}>
            <div className={styles.lable}>SCA</div>
            {scaOpen? <ExpandLessIcon className={styles.btn}  onClick={(prev) => setScaOpen(prev => !prev)}/> : <ExpandMoreIcon className={styles.btn}  onClick={(prev) => setScaOpen(prev => !prev)}/>}
          </div>
          <Collapse in={scaOpen}>
            <div className={styles.collapseContainer}>Sca 결과보여주기</div>
          </Collapse>
        </div>
      </main>
    </div>
  );
}

export default DevResult;