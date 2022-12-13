import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import List from "./JenkinsList";
import Modal from '@mui/material/Modal';
import ListSkeleton from "../../components/ListSkeleton";
import JenkinsCreate from "./JenkinsCreate";

const BodyWrapper = styled.div`
	margin-top: 3rem;
	margin-right: 9%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	flex: 1;
  gap: 1rem;
`;
const Buttons = styled.div`
	display: flex;
	justify-content: space-between;
`;
const ModifyDelete = styled.div`
	display: flex;
	gap: 0.5rem;
`;

const JenkinsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 12px 8px;
  background-color: #EEEEF2;
  border-radius: 6.4px;
`

const Jenkins = () => {
	const [loading, setLoading] = useState(false);
	const [create, setCreate] = useState(false);
	const [created, setCreated] = useState(false);
	const [checkList, setChecked] = useState({});
	const [jenkinsList, setJenkinsList] = useState(['Pre-commit', 'Code-Ql', 'Zap', 'Dependabot']);
	
	const onHandleCreate = () => setCreate((prev) => !prev);
	const onHandleClose = () => setCreate((prev) => !prev);
	// 현재 Jenkins List 가져오는 API 미완성

	const onHandleCheck = (event) => {
    const {value, checked} = event.target;
    if(checked){
      setChecked((prev) => ({...prev, [value]: checked}));
    }
    else{
      const temp = {...checkList};
      delete temp[value];
      setChecked(temp);
    }
  }

	const onHandleModify = () => {
		console.log("modify");
	};
	const onHandleDelete = () => {
		console.log("delete");
		// Object.keys(checkList).forEach((key) => {
    //   deletePipeline({pipeline_name: key}).then((res) => {
    //     alert(res.data.msg);
    //     setLoading(false);
    //     window.location.reload();
    //   })})
	};
  
	return (
		<BodyWrapper>
			<Buttons>
				<Button onHandleCreate={onHandleCreate} />
				{Object.keys(checkList).length > 0 ? (
					<ModifyDelete>
						<Button name="수정" onHandleModify={onHandleModify} />
						<Button name="삭제" onHandleDelete={onHandleDelete}  />
					</ModifyDelete>
				) : null}
			</Buttons>
      <JenkinsWrapper>
			{ 
			loading ? 
        <ListSkeleton /> :
				<List setChecked={setChecked} onHandleCheck={onHandleCheck} name="deploy_jenkinsfile_1.0.2" jenkins={jenkinsList} owner="nebulayoon" created="2022-10-12" updated="2022-10-12"/>
      }
      </JenkinsWrapper>
			<Modal open={create} onClose={onHandleClose} disableAutoFocus={true}>
        <JenkinsCreate setCreate={setCreate} setCreated={setCreated}/>
      </Modal>
		</BodyWrapper>
	);
};

export default Jenkins;
