import {useEffect, useState} from 'react';
import styles from "../styles/DevPipelineSecurity.module.css";
import axios from 'axios';
import DevToolName from './DevToolName';


function DevCreate({step, setStep}){

  const onHandleItemClick = (event) => {
    const {name, value, checked} = event.target;
    setStep((prev) => {
      return {...prev, [name]: {...prev[name], [value]: checked}}
    });
  }

  const loadToolList = async () => {
    const response = await axios.get("http://112.167.178.26:52200/api/v1/tool/toolList");
    let result = response.data.result;
    let stepDict = {};

    for(let i = 0; i < result.length; i++){
      if(Object.keys(stepDict).includes(result[i].stage)){ // stage가 있는 경우
        stepDict[result[i].stage][result[i].name] = false;
      }else{ // 새롭게 추가된 stage인 경우
        let row = {};
        row[result[i].name] = false;
        stepDict[result[i].stage] = row;
      }
    }
    setStep(stepDict);
  };

  useEffect(() => {
    console.log(step)
  },[step]);

  return(
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.lable}>SIS</div>
        {/* <div className={styles.checkWrapper}>
          <input className={styles.checkbox} type="checkbox" name="sis" value="pre-commit" onClick={onHandleItemClick}/>
          <span className={styles.tool}>pre-commit</span>
        </div> */}
        {
          Object.keys(step) ? <div>없음</div> :
          Object.keys(step["SAST"]).map((key) => {
            <DevToolName name={key} onClick={onHandleItemClick}/>
          })
        }
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