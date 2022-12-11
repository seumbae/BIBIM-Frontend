import { useState, useEffect } from "react";
import { deletePipeline, getPipeline } from "../../services/axios";
import styled from "styled-components";
import Button from "./Button";
import List from "./PipelineList";
import Modal from '@mui/material/Modal';
import PipelineCreate from "./PipelineCreate";
import ListSkeleton from "../../components/ListSkeleton";

const BodyWrapper = styled.div`
	margin-top: 3rem;
	margin-right: 9%;
	heigth: 100vh;
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

const PipelineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 12px 8px;
  background-color: #EEEEF2;
  border-radius: 6.4px;
`

const Pipeline = () => {
  const [loading, setLoading] = useState(true);
  const [create, setCreate] = useState(false);
  const [created, setCreated] = useState(false);
  const [checkList, setChecked] = useState({});
  const [jenkinsList, setJenkinsList] = useState(['Pre-commit', 'Code-Ql', 'Zap', 'Dependabot']);
  const [pipelineList, setPipelineList] = useState([]);
	const onHandleCreate = () => {
    setCreate((prev) => !prev);
	};
  const onHandleClose = () => setCreate((prev) => !prev);
	const onHandleModify = () => {
		console.log("modify");
	};

	const onHandleDelete = () => {
		Object.keys(checkList).forEach((key) => {
      deletePipeline({pipeline_name: key}).then((res) => {
        alert(res.data.msg);
        setLoading(false);
        window.location.reload();
      })})
	};

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
  
  const onHandleGetPipeline = () => {
    getPipeline().then((res) => {
      setPipelineList(res.data.result);
      setLoading(false);
    });
    if(created) setCreated(false);
  }

  useEffect(() => {
    onHandleGetPipeline();
  }, [created]);
	return(
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
      <PipelineWrapper>
        {loading ? 
          <ListSkeleton /> :
        pipelineList?.map((item) => {
          return <List key={item.pipeline_name} onHandleCheck={onHandleCheck} name={item} jenkins={jenkinsList} owner="nebulayoon" created="2022-10-12" updated="2022-10-12" repo="github.com/nebulayoon/python/tree/main/check2" />
        })}
      </PipelineWrapper>
      <Modal open={create} onClose={onHandleClose} disableAutoFocus={true}>
        <PipelineCreate setCreate={setCreate} setCreated={setCreated}/>
      </Modal>
		</BodyWrapper>
  );
};

export default Pipeline;
