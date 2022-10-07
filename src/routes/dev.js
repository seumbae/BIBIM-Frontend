import styles from "../styles/dev.module.css";
import { useState } from "react";
import DevHome from "../components/DevHome";
import DevResult from "../components/DevResult";
import DevPipeline from "../components/DevPipeline";
import Collapse from "@mui/material/Collapse";
import DevPipelineCreate from "../components/DevPipelineCreate";
import DevJenkins from "../components/DevJenkins";

function Dev({ name }) {
	const [btn, setBtn] = useState("home");
	const [collapse, setCollapse] = useState("+");
	const [register, setRegister] = useState(false);
	let component;
	if (btn === "result") {
		component = <DevResult />;
	} else if (btn === "home") {
		component = <DevHome />;
	} else if (btn === "pipeline") {
		component = <DevPipeline />;
	} else if (btn === "pipelineCreate") {
		component = <DevPipelineCreate />;
	} else if (btn === "jenkins"){
		component = <DevJenkins />
	}

	const onHandleCollapse = () => {
		setCollapse((prev) => (prev === "+" ? "-" : "+"));
	};
	return (
		<div>
			<header className={styles.header}>
				<div className={styles.header_logo}>
					<div className={styles.logo}>BIBIM</div>
				</div>
				<div className={styles.login}>
					{name ? (
						<div className={styles.headerName}>{name}님</div>
					) : (
						<div className={styles.headerName}>로그인이 필요합니다.</div>
					)}
					<div className={styles.logout}>Logout</div>
				</div>
			</header>
			<main className={styles.dev_body}>
				<div className={styles.side}>
					<nav className={styles.nav}>
						<div className={`${styles.contents} ${btn==="home"? styles.isActive : ''}`} onClick={() => {setBtn("home");}}>
							DashBoard
						</div>
						<div className={`${styles.contents} ${btn==="result"? styles.isActive : ''}`} onClick={() => {setBtn("result");}}>
							Result
						</div>
						<div className={`${styles.contents} ${btn==="jenkins"? styles.isActive : ''}`} onClick={() => {setBtn("jenkins");}}>
							Jenkins File
						</div>
						<div className={`${styles.contents} ${styles.haveCollapse}`} onClick={() => { setBtn("pipeline"); onHandleCollapse();}}>
							<div>
								Pipeline
							</div>
							<div onClick={onHandleCollapse}>{collapse}</div>
						</div> 
						<Collapse className={styles.collapse} in={collapse === "-" ? true : false} >
							<div className={`${styles.collapseContents}  ${btn==="pipeline"? styles.isActive : ''}`} onClick={() => { setBtn("pipeline"); }} >
								조회
							</div>
							<div className={`${styles.collapseContents}  ${btn==="pipelineCreate"? styles.isActive : ''}`} onClick={() => { setBtn("pipelineCreate"); }}>
								생성
							</div>
						</Collapse>
					</nav>
				</div>
				<div className={styles.main}>{component}</div>
			</main>
		</div>
	);
}

export default Dev;
