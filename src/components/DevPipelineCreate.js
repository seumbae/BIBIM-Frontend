import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/DevPipelineCreate.module.css';
import DevPipelineSecurity from "./DevPipelineSecurity";
import Collapse from '@mui/material/Collapse';
import DevJenkinsList from "./DevJenkinsList";

function DevPipelineCreate() {
  const [step, setStep] = useState({
    sis:{
      'pre-commit' : false,
    },
    sast:{
      'code-ql' : false,
    },
    dast:{
      'zap' : false,
      'arachni' : false,
      'nikto' : false,
    },
    sca:{
      'owasp-dependencycheck' : false,
      'dependabot' : false,
    }
  });
	const [projectName, setProjectName] = useState("");
	const [repoUrl, setRepoUrl] = useState("");
	const [created, setCreadted] = useState(false);
  const [checkDescription, setcheckDescription] = useState(false);
  const [description, setDescription] = useState("");
  const [checkSecurity, setCheckSecurity] = useState(false);
  const [upload, setUpload] = useState(false);

	const onHandleCreate = async (event) => {
		event.preventDefault();
		const response = await axios.post(
			"http://112.167.178.26:50000/api/v1/pipeline/createPipeline",
			{
				pipeline_name: projectName,
				repo_url: repoUrl,
				jenkinsfile_path: "Jenkinsfile_test",
				owner_id: 1,
			},
			{
				header: { "Context-Type": "application/json" },
			}
		);
		setProjectName("");
		setRepoUrl("");
		alert(response?.data.msg);
		if (response?.data.status === 201) setCreadted(true);
	};

  return (
    <div className={styles.create}>
				<div className={styles.header}>Configuration</div>
        <div>
          <div className={styles.inputWrapper}>
            <div className={styles.lable}>Project name</div>
            <div><input className={styles.input} type="text" value={projectName} onChange={(event) => setProjectName(event.target.value)} /></div>
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.lable}>Repository url</div>
            <div><input className={styles.input} type="text" value={repoUrl} onChange={(event) => setRepoUrl(event.target.value)} /></div>
          </div>
          <div className={styles.checkInput}>
            <div className={styles.checkWrapper}>
              <input className={styles.checkbox} type="checkbox" onClick={(prev) => setcheckDescription(prev => !prev)}/>
              <span className={styles.lable}>Description</span>
            </div>
            <Collapse in={checkDescription}>
              <textarea className={`${styles.input} ${styles.textarea}`} rows="3" autoComplete="off" resize="none" onChange={(event) => setDescription(event.target.value) }></textarea>
            </Collapse>
          </div>
          <div className={styles.checkInput}>
            <div className={styles.checkWrapper}>
              <input className={styles.checkbox} type="checkbox" onClick={(prev) => setCheckSecurity(prev => !prev)}/>
              <span className={styles.lable}>Security check</span>
            </div>
            <Collapse in={checkSecurity}>
            <DevPipelineSecurity step={step} setStep={setStep}/>    
            </Collapse>
          </div>
          <div className={styles.checkInput}>
            <div className={styles.checkWrapper}>
              <input className={styles.checkbox} type="checkbox" onClick={(prev) => setUpload(prev => !prev)}/>
              <span className={styles.lable}>Upload Jenkins file</span>
            </div>
            <Collapse in={upload}>
              <div>
              <DevJenkinsList/>
              </div>
            </Collapse>
          </div>
        </div>
        <div>
          <div className={styles.subheader}>Option</div>
          <div> Option 더 넣어야하는데....... </div>
        </div>
				<div>
          <button className={styles.btn} onClick={onHandleCreate}>Create</button>
        </div>
			</div>
  )
}

export default DevPipelineCreate;