import {useEffect, useState} from 'react';
import styles from "./DevJenkinsFileCreate.module.css";

function DevCreate(){
  const [clicked, setClicked] = useState({});
  const [jenkinsFile, setJenkinsFile] = useState(null);
  const onHandleRegister = () => {
    console.log("register");
    // Jenkins File Register API 추가되면 Update
  }

  const onHandleItemClick = (event) => {
    const {id, value} = event.target;
    const checkboxes = document.getElementsByName(id);

    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });

    event.target.checked = true;
    
    setClicked((prev) => ({...prev, [id]: value}));
  }

  useEffect(() => {
    console.log(clicked);
  },[clicked]);

  const onHandleFile = (event) => {
    setJenkinsFile(event.target.files);
    console.log(jenkinsFile);
  }

  return(
    <div className={styles.container}>
      <div>
        <input id="file" type="file" accpet=".*" onChange={onHandleFile} multiple={false}/>        
      </div>
      <div className={styles.box}>
        <div className={styles.lable}>SIS</div>
        <div>
          <input type="checkbox" id="sis" name="sis" value="pre-commit" onClick={onHandleItemClick}/>
          <label htmlFor="pre-commit">pre-commit</label>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.lable}>SAST</div>
        <div>
          <input type="checkbox" id="sast" name="sast" value="code-ql" onClick={onHandleItemClick}/>
          <label htmlFor="code-ql">Code-QL</label>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.lable}>DAST</div>
        <div>
          <input type="checkbox" id="dast" name="dast" value="zap" onClick={onHandleItemClick}/>
          <label htmlFor="zap">ZAP</label>
        </div>
        <div>
          <input type="checkbox" id="dast" name="dast" value="arachni" onClick={onHandleItemClick}/>
          <label htmlFor="arachni">Arachni</label>
        </div>
        <div>
          <input type="checkbox" id="dast" name="dast" value="nikto" onClick={onHandleItemClick}/>
          <label htmlFor="nikto">Nikto</label>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.lable}>SCA</div>
        <div>
          <input type="checkbox" id="sca" name="sca" value="dependencycheck" onClick={onHandleItemClick}/>
          <label htmlFor="dependencycheck">OWASP-dependencycheck</label>
        </div>
        <div>
          <input type="checkbox" id="sca" name="sca" value="dependabot" onClick={onHandleItemClick}/>
          <label htmlFor="dependabot">Dependabot</label>
        </div>
      </div>
      <div>
        <button onClick={onHandleRegister}>등록하기</button>
      </div>
    </div>
  );
}

export default DevCreate;