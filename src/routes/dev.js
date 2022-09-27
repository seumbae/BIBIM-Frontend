import styles from "./dev.module.css";
import {Collapse} from 'react-collapse';
import {useState} from 'react';

function Dev() {
  const [btnSis, setBtnSis] = useState(false);
  const [btnSast, setBtnSast] = useState(false);
  const [btnDast, setBtnDast] = useState(false);
  const [btnSCA, setBtnSca] = useState(false);
  return (
    <div>
      <div className={styles.box}>
        <div className={styles.lable}>SIS</div>
        <button onClick={() => setBtnSis((prev) => !prev)}>V</button>
        <Collapse isOpened={btnSis}>
          <div>
            
          </div>
        </Collapse>

      </div>
      <div className={styles.box}>
        <div className={styles.lable}>SAST</div>
        <button onClick={() => setBtnSast((prev) => !prev)}>V</button>
      </div>
      <div className={styles.box}>
        <div className={styles.lable}>DAST</div>
        <button onClick={() => setBtnDast((prev) => !prev)}>V</button>
      </div>
      <div className={styles.box}>
        <div className={styles.lable}>SCA</div>
        <button onClick={() => setBtnSca((prev) => !prev)}>V</button>
      </div>
    </div>
  );
}

export default Dev;