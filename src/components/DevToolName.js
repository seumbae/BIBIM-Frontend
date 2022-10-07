import {useEffect, useState} from 'react';
import styles from "../styles/DevPipelineSecurity.module.css";

const DevToolName = ({name, onClick}) => {
  

  return(
    <>
      <div className={styles.checkWrapper}>
      <input className={styles.checkbox} type="checkbox" name="sis" value="pre-commit" onClick={onClick}/>
      <span className={styles.tool}>{name}</span>
      </div>
    </>
  );
}

export default DevToolName;