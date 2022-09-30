import { useState } from "react";
import DevJenkinsFileCreate from "./DevJenkinsFileCreate";
import DevJenkinsFileList from "./DevJenkinsFileList";
import styles from "./DevJenkinsFile.module.css";

function DevJenkinsFile() {
  const [btn, setBtn] = useState("list");  
	return (
    <div>
      <div className={styles.container}>
        <button className={styles.btn} onClick={() => setBtn("list")}>File List</button>
        <button className={styles.btn} onClick={() => setBtn("create")}>Create File</button>
      </div>
      {btn === "list" ? <DevJenkinsFileList /> : <DevJenkinsFileCreate/>}
    </div>
);
}

export default DevJenkinsFile;
