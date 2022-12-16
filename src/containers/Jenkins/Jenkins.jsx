import { useState } from "react";
import styled from "styled-components";
import { getJenkinslist } from "../../services/axios";

import Button from "./Button";
import List from "./JenkinsList";
import Modal from "@mui/material/Modal";
import ListSkeleton from "../../components/ListSkeleton";
import JenkinsCreate from "./JenkinsCreate";
import { useLayoutEffect } from "react";

const BodyWrapper = styled.div`
	margin-top: 3rem;
	margin-right: 9%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	flex: 1;
	gap: 1rem;
	min-width: 900px;
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
	background-color: #eeeef2;
	border-radius: 6.4px;
`;

const None = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	color: #4a4949;
	font-size: 0.8rem;
`;

const Jenkins = () => {
	const [loading, setLoading] = useState(false);
	const [create, setCreate] = useState(false);
	const [created, setCreated] = useState(false);
	const [checkList, setChecked] = useState({});
	const [jenkinsList, setJenkinsList] = useState([]);
	const onHandleCreate = () => setCreate((prev) => !prev);
	const onHandleClose = () => setCreate((prev) => !prev);
	// 현재 Jenkins List 가져오는 API 미완성

	const onHandleCheck = (event) => {
		const { value, checked } = event.target;
		if (checked) {
			setChecked((prev) => ({ ...prev, [value]: checked }));
		} else {
			const temp = { ...checkList };
			delete temp[value];
			setChecked(temp);
		}
		console.log(checkList);
	};

	const onHandleModify = () => {
		console.log("modify");
	};
	const onHandleDelete = () => {
		console.log("delete");
	};

	useLayoutEffect(() => {
		getJenkinslist()
			.then((res) => {
				setJenkinsList(res.data.result);
			})
			.then(setLoading(false));
	}, []);
	return (
		<BodyWrapper>
			<Buttons>
				<Button onHandleCreate={onHandleCreate} />
				{Object.keys(checkList).length > 0 ? (
					<ModifyDelete>
						<Button name="수정" onHandleModify={onHandleModify} />
						<Button name="삭제" onHandleDelete={onHandleDelete} />
					</ModifyDelete>
				) : null}
			</Buttons>
			<JenkinsWrapper>
				{/* TODO: None 추가 */}
				{loading ? (
					<ListSkeleton />
				) : (
					jenkinsList.map((item) => {
						return (
							<List
								key={item.jenkinsfile_name}
								onHandleCheck={onHandleCheck}
								jenkins={item}
							/>
						);
					})
				)}
			</JenkinsWrapper>
			<Modal open={create} onClose={onHandleClose} disableAutoFocus={true}>
				<JenkinsCreate setCreate={setCreate} setCreated={setCreated} />
			</Modal>
		</BodyWrapper>
	);
};

export default Jenkins;
