import styles from "./dev.module.css";
import {useState} from 'react';
import DevHome from "../components/DevHome";
import DevResult from "../components/DevResult";
import DevJenkinsFile from "../components/DevJenkinsFile";
import DevPipeline from "../components/DevPipeline";

function Dev({name}) {
  const [btn, setBtn] = useState("home");
  let component;
  if(btn === "result"){
    component = <DevResult/>
  }
  else if(btn === "create"){
    component = <DevJenkinsFile/>
  }
  else if(btn === "home"){
    component = <DevHome/>
  }
  else if(btn === "pipeline"){
    component = <DevPipeline/>
  }
  
  return (
    <div>
      <header className={styles.header}>
        {name ? <div className={styles.headerName}>{name}님 환영합니다.</div> : <div className={styles.headerName}>로그인이 필요합니다.</div>}
      </header>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <div onClick={() => {setBtn("home")}}>Home</div>
          <div onClick={() => {setBtn("result")}}>Result</div>
          <div onClick={() => {setBtn("create")}}>Create</div>
          <div onClick={() => {setBtn("pipeline")}}>Pipeline</div>
        </nav>
        <div className={styles.component}>
        {component}
        </div>
      </div>
      <footer>
        This is Footer
      </footer>
    </div>
  );
}

export default Dev;