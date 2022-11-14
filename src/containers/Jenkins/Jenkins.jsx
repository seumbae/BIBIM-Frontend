import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import List from "./JenkinsList";

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

const JenkinsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 12px 8px;
  background-color: #EEEEF2;
  border-radius: 6.4px;
`

const Jenkins = () => {
	// 현재 Jenkins List 가져오는 API 미완성
	const onHandleCreate = () => {
		console.log("create");
		// return modal
	};
	const onHandleModify = () => {
		console.log("modify");
	};
	const onHandleDelete = () => {
		console.log("delete");
	};
	const [checked, setChecked] = useState(false);
  const [jenkinsList, setJenkinsList] = useState(['Pre-commit', 'Code-Ql', 'Zap', 'Dependabot']);
	return (
		<BodyWrapper>
			<Buttons>
				<Button onHandleCreate={onHandleCreate} />
				{checked ? (
					<ModifyDelete>
						<Button name="수정" onHandleModify={onHandleModify} />
						<Button name="삭제" onHandleDelete={onHandleDelete} />
					</ModifyDelete>
				) : null}
			</Buttons>
      <JenkinsWrapper>
        <List setChecked={setChecked} name="deploy_jenkinsfile_1.0.2" jenkins={jenkinsList} owner="nebulayoon" created="2022-10-12" updated="2022-10-12"/>
      </JenkinsWrapper>
		</BodyWrapper>
	);
};

export default Jenkins;
