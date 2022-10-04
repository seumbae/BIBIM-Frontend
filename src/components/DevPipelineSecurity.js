import {useEffect, useState} from 'react';
import styles from "./DevPipelineSecurity.module.css";

function DevCreate({step, setStep}){

  const onHandleItemClick = (event) => {
    const {name, value, checked} = event.target;
    setStep((prev) => {
      return {...prev, [name]: {...prev[name], [value]: checked}}
    });
  }

  useEffect(() => {
    console.log(step);
  },[step]);

  return(
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.lable}>SIS</div>
        <div className={styles.checkWrapper}>
          <input className={styles.checkbox} type="checkbox" name="sis" value="pre-commit" onClick={onHandleItemClick}/>
          <span className={styles.tool}>pre-commit</span>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.lable}>SAST</div>
        <div className={styles.checkWrapper}>
          <input className={styles.checkbox} type="checkbox" name="sast" value="code-ql" onClick={onHandleItemClick}/>
          <span className={styles.tool}>Code-QL</span>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.lable}>DAST</div>
        <div className={styles.checkWrapper}>
          <input className={styles.checkbox} type="checkbox" name="dast" value="zap" onClick={onHandleItemClick}/>
          <span className={styles.tool}>ZAP</span>
        </div>
        <div className={styles.checkWrapper}>
          <input className={styles.checkbox} type="checkbox" name="dast" value="arachni" onClick={onHandleItemClick}/>
          <span className={styles.tool}>Arachni</span>
        </div>
        <div className={styles.checkWrapper}>
          <input className={styles.checkbox} type="checkbox" name="dast" value="nikto" onClick={onHandleItemClick}/>
          <span className={styles.tool}>Nikto</span>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.lable}>SCA</div>
        <div className={styles.checkWrapper}>
          <input className={styles.checkbox} type="checkbox" name="sca" value="owasp-dependencycheck" onClick={onHandleItemClick}/>
          <span className={styles.tool}>OWASP-dependencycheck</span>
        </div>
        <div className={styles.checkWrapper}>
          <input className={styles.checkbox} type="checkbox" name="sca" value="dependabot" onClick={onHandleItemClick}/>
          <span className={styles.tool}>Dependabot</span>
        </div>
      </div>
    </div>
  );
}

export default DevCreate;