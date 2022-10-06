import DevJenkinsList from "../components/DevJenkinsList";
import styles from "../styles/DevJenkins.module.css";
import AddIcon from '@mui/icons-material/Add';
import {useState} from "react";
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';
import DevPipelineSecurity from "./DevPipelineSecurity";
import axios from "axios";
function DevJenkins() {
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
  const [checkSecurity, setCheckSecurity] = useState(false);
  const [upload, setUpload] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [fileName, setFileName] = useState("");
  const [created, setCreated] = useState(false);

  const onHandleCreate = async (event) => {
    event.preventDefault();
		const response = await axios.post(
			"http://112.167.178.26:50000/api/v1/jenkins/createJenkinsFile",
			{
				tools: step,
			},
			{
				header: { "Context-Type": "application/json" },
			}
		);
    handleClose();
    setCreated(true);
  }

  return (<div>
    <header className={styles.headerContainer}>
			<div className={styles.header}>Jenkins File</div>
      <div className={styles.create}><AddIcon className={styles.icon} onClick={handleOpen}/></div>
		</header>
    <DevJenkinsList created={created} setCreated={setCreated}/>
    {/* Jenkins File 생성 모달 */}
    <Modal open={open} onClose={handleClose} disableAutoFocus={true}>
      <div className={styles.modalContainer}>
        <header className={styles.modalHeader}>
          <div className={styles.modalTitle}>Jenkins File Create</div>
          <div><CloseIcon onClick={handleClose} className={styles.icon}/></div>
        </header>
        <main>
          <div className={styles.inputWrapper}>
            <div className={styles.lable}>File name</div>
            <div><input className={styles.input} type="text" value={fileName} onChange={(event) => setFileName(event.target.value)} /></div>
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
              file upload
              </div>
            </Collapse>
          </div>
        </main>
        <div>
          <button className={styles.btn} onClick={onHandleCreate}>Create</button>
        </div>
      </div>
    </Modal>
  </div>);
}

export default DevJenkins;