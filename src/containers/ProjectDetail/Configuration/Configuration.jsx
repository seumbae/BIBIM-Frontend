import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import HorizonLine from "../../../components/HorizonLine";
import SecurityCheck from "./SecurityCheckList";
const Container = styled.div`
	margin-top: 3rem;
	margin-right: 9%;
	display: flex;
	flex-direction: column;
	flex: 1;
	gap: 0.5rem;
`;

const CommonArea = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin-top: 0.5rem;
`;

const Title = styled.div`
	font-size: 1.1rem;
	font-weight: 500;
`;
const Input = styled.input`
	border: 1.5px solid #d4d4d4;
	border-radius: 0.3rem;
	line-height: 1.5rem;
	margin-bottom: 0.8rem;
	padding: 0.2rem 0.8rem;
`;

const RepoArea = styled.div`
	display: flex;
	flex-direction: column;
`;

const TitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const ModifyBtn = styled.div`
	font-size: 0.7rem;
	background-color: #eeeef2;
	border-radius: 1rem;
	width: 2.5rem;
	height: 1.5rem;
	text-align: center;
	line-height: 1.5rem;
	cursor: pointer;
`;

const SaveBtn = styled.div`
	width: 65px;
	height: 30px;
	background-color: #eeeef2;
	border-radius: 1.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	align-self: end;
`;

const Configuration = () => {
	const param = useParams();
	const [projectName, setProjectName] = useState("");
	const [changedProjectName, setChangedProjectName] = useState("");
	const [repoUrl, setRepoUrl] = useState("");
	const [changedRepoUrl, setChangedRepoUrl] = useState("");
	const [description, setDescription] = useState("");
	const [changedDescription, setChangedDescription] = useState("");

	useEffect(() => {
		setProjectName(param.projectTitle);
	}, [param.projectTitle]);
	const onHandleSave = () => {
		//TODO: pipeline modify API
		console.log("save");
	};

	const onHandleModify = () => {
		console.log("modify");
	};

	//TODO: Context || API || parameter 이용하여 Pipeline 정보 가져오기
	return (
		<Container>
			<CommonArea style={{ marginTop: 0 }}>
				<Title>Project Name</Title>
				<Input
					type="text"
					placeholder={projectName}
					value={changedProjectName}
					onChange={(event) => setChangedProjectName(event.target.value)}
				/>
			</CommonArea>
			<HorizonLine />
			<CommonArea>
				<Title>Repository Url</Title>
				<Input
					type="text"
					placeholder={repoUrl}
					value={changedRepoUrl}
					onChange={(event) => setChangedRepoUrl(event.target.value)}
				/>
			</CommonArea>
			<HorizonLine />
			<CommonArea>
				<Title>Description</Title>
				<Input
					type="text"
					placeholder={description}
					value={changedDescription}
					onChange={(event) => setChangedDescription(event.target.value)}
				/>
			</CommonArea>
			<CommonArea>
				<TitleContainer>
					<Title>Applied Security Check</Title>
					<ModifyBtn onClick={onHandleModify}>수정</ModifyBtn>
				</TitleContainer>
				<SecurityCheck />
			</CommonArea>
			{/* TODO: project Name, Repository Url, Description, Security Check가 변경되었을 시 Save 뜨도록 */}
			{/* {changedProjectName !== projectName || repoUrl !== changedRepoUrl || description !== changedDescription ? <SaveBtn onClick={onHandleSave}>Save</SaveBtn> : null} */}
			<SaveBtn onClick={onHandleSave}>Save</SaveBtn>
		</Container>
	);
};

export default Configuration;
