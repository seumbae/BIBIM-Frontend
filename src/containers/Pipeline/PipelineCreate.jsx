import styled from "styled-components";
import { useState } from "react";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import SecurityCheckList from "../../components/SecurityCheckList";
import { createPipeline } from "../../services/axios";
import { useContext } from "react";
import { BuildContext } from "../../store/BuildContext";

const ModalContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 35rem;
	background-color: #ffffff;
	border: 2px solid #ffffff;
	padding: 2rem;
  max-height: 700px;
  overflow: auto;
`;
const TitleWrapper = styled.div`
  display: flex;
	justify-content: space-between;
`;

const Title = styled.div`
	font-size: 1.8rem;
	font-weight: 800;
	padding-bottom: 2rem;
`;

const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

const Subtitle = styled.div`
	font-size: 0.9rem;
	font-weight: 600;
`;

const Input = styled.input`
	border: 1.5px solid #d4d4d4;
	border-radius: 0.3rem;
	line-height: 1.5rem;
	margin-bottom: 0.8rem;
`;

const AreaWithCheck = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 8px;
`;

const SubtitleWithCheck = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

const Checkbox = styled.input`
	margin: 0;
	appearance: none;
	width: 20px;
	height: 20px;
	border: 1.5px solid #d4d4d4;
	border-radius: 0.3rem;
	cursor: pointer;
	&:checked {
		background-color: #000000;
		border: 2px solid #000000;
	}
`;

const TextArea = styled.textarea`
	border: 1.5px solid #d4d4d4;
	border-radius: 0.3rem;
	line-height: 1.5rem;
	width: 95%;
	margin-bottom: 0.8rem;
	resize: none;
  float: right;
`;

const Btn = styled.div`
	width: 65px;
	height: 30px;
	background-color: #eeeef2;
	border-radius: 1.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
  float: right;
`;

const Close = styled(CloseIcon)`
	cursor: pointer;
`;
const CreateModal = ({ create, setCreate, setCreated}) => {
	const buildContext = useContext(BuildContext);
	const [projectName, setProjectName] = useState("");
	const [repoUrl, setRepoUrl] = useState("");
  const [branch, setBranch] = useState("");
	const [created, setCreadted] = useState(false);
	const [checkDescription, setcheckDescription] = useState(false);
	const [description, setDescription] = useState("");
	const [checkSecurity, setCheckSecurity] = useState(false);
	const [uploadexisting, setUploadexisting] = useState(false);
	const [uploadlocal, setUploadlocal] = useState(false);
	const [step, setStep] = useState({});
	
	const onHandleCreate = async (event) => {
		event.preventDefault();
    createPipeline({pipeline_name: projectName, repo_url: repoUrl, branch, tools: step}).then((res) => {
      alert(res.data.msg);
			window.location.reload();
    })
		buildContext.addPipeline(projectName);
		setProjectName("");
		setRepoUrl("");
    setBranch("");
    setCreated(true);
    setCreate(false);
	};

	const onHandleClose = () => {
		setCreate(false);
	};

	return (
		<ModalContainer>
			<TitleWrapper>
				<Title>Pipeline Create</Title>
				<Close onClick={onHandleClose} />
			</TitleWrapper>
			<div>
				<InputWrapper>
					<Subtitle>Project name</Subtitle>
					<Input
						type="text"
						value={projectName}
						onChange={(event) => setProjectName(event.target.value)}
					/>
				</InputWrapper>
				<InputWrapper>
					<Subtitle>Repository url</Subtitle>
					<Input
						type="text"
						value={repoUrl}
						onChange={(event) => setRepoUrl(event.target.value)}
					/>
				</InputWrapper>
        <InputWrapper>
					<Subtitle>Branch</Subtitle>
					<Input
						type="text"
						value={branch}
						onChange={(event) => setBranch(event.target.value)}
					/>
				</InputWrapper>
				<AreaWithCheck>
					<SubtitleWithCheck>
						<Checkbox
							type="checkbox"
							onClick={(prev) => setcheckDescription((prev) => !prev)}
						/>
						<Subtitle>Description</Subtitle>
					</SubtitleWithCheck>
					<Collapse in={checkDescription}>
						<TextArea
							rows="3"
							autoComplete="off"
							resize="none"
							onChange={(event) => setDescription(event.target.value)}
						></TextArea>
					</Collapse>
				</AreaWithCheck>
				<AreaWithCheck>
					<SubtitleWithCheck>
						<Checkbox
							type="checkbox"
							onClick={(prev) => setCheckSecurity((prev) => !prev)}
						/>
						<Subtitle>Proceed Security check</Subtitle>
					</SubtitleWithCheck>
					<Collapse in={checkSecurity}>
            <SecurityCheckList setStep={setStep}/>
					</Collapse>
				</AreaWithCheck>
				<AreaWithCheck>
					<SubtitleWithCheck>
						<Checkbox
							type="checkbox"
							onClick={(prev) => setUploadexisting((prev) => !prev)}
						/>
						<Subtitle>Upload existing Jenkins File</Subtitle>
					</SubtitleWithCheck>
					<Collapse in={uploadexisting}>
						<div>Upload existing Jenkins File</div>
					</Collapse>
				</AreaWithCheck>
        {/* <AreaWithCheck>
					<SubtitleWithCheck>
						<Checkbox
							type="checkbox"
							onClick={(prev) => setUploadlocal((prev) => !prev)}
						/>
						<Subtitle>Upload Jenkins File from Local</Subtitle>
					</SubtitleWithCheck>
					<Collapse in={uploadlocal}>
						<div>Upload Jenkins File from Local</div>
					</Collapse>
				</AreaWithCheck> */}
        {/* Option이 더 존재한다면 넣을 자리 */}
			</div>
			<Btn onClick={onHandleCreate}>Create</Btn>
		</ModalContainer>
	);
};

export default CreateModal;
