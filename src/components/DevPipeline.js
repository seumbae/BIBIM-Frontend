import { useState, useEffect } from "react";
import axios from "axios";
import DevPipelineList from "./DevPipelineList";
import styles from "./DevPipeline.module.css";

function DevPipeline() {
	const [projectName, setProjectName] = useState("");
	const [repoUrl, setRepoUrl] = useState("");
	const [created, setCreadted] = useState(false);

	const onHandleChange = (event) => {
		const { name } = event.target;
		if (name === "projectName") setProjectName(event.target.value);
		if (name === "repoUrl") setRepoUrl(event.target.value);
	};

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
		<div>
			<header>
				<div className={styles.header}>Pipeline</div>
			</header>
			<main>
				<DevPipelineList created={created} setCreated={setCreadted} />
			</main>
		</div>
	);
}

export default DevPipeline;
