import { useState, useEffect } from "react";
import { deletePipeline, getPipelineList } from "../../services/axios";
import styled from "styled-components";
import Button from "./Button";
import List from "./PipelineList";
import Modal from "@mui/material/Modal";
import PipelineCreate from "./PipelineCreate";
import ListSkeleton from "../../components/ListSkeleton";
import { BuildContext } from "../../store/BuildContext";
import { useContext } from "react";

const BodyWrapper = styled.div`
	margin-top: 3rem;
	margin-right: 9%;
	heigth: 100vh;
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

const PipelineWrapper = styled.div`
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

const Pipeline = () => {
	const buildContext = useContext(BuildContext);
	const [loading, setLoading] = useState(true);
	const [create, setCreate] = useState(false);
	const [created, setCreated] = useState(false);
	const [checkList, setChecked] = useState({});
	const [pipelineList, setPipelineList] = useState([]);
	const onHandleCreate = () => {
		setCreate(true);
	};
	const onHandleClose = () => setCreate(false);
	const onHandleModify = () => {
		console.log("modify");
	};

	const onHandleDelete = () => {
		Object.keys(checkList).forEach((key) => {
			deletePipeline({ pipeline_name: key, branch: "master" }).then((res) => {
				alert(res.data.msg);
				setLoading(false);
				buildContext.removePipeline(key);
				window.location.reload();
			});
		});
	};

	const onHandleCheck = (event) => {
		const { value, checked } = event.target;
		if (checked) {
			setChecked((prev) => ({ ...prev, [value]: checked }));
		} else {
			const temp = { ...checkList };
			delete temp[value];
			setChecked(temp);
		}
	};

	const onHandleGetPipeline = () => {
		setPipelineList(buildContext.pipeline);
		setLoading(false);
		if (created) setCreated(false);
	};

	useEffect(() => {
		onHandleGetPipeline();
	}, [buildContext.pipeline]);

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
			{loading ? (
				<PipelineWrapper>
					<ListSkeleton />
				</PipelineWrapper>
			) : null}
			{!loading && pipelineList.length === 0 ? (
				<None>등록된 Pipeline이 없습니다.</None>
			) : (
				<PipelineWrapper>
					{pipelineList.map((item) => {
						return (
							<List
								key={item.pipeline_name}
								onHandleCheck={onHandleCheck}
								data={item}
								created="2022-10-12"
								updated="2022-10-12"
							/>
						);
					})}
				</PipelineWrapper>
			)}
			<Modal open={create} onClose={onHandleClose} disableAutoFocus={true}>
				<PipelineCreate setCreate={setCreate} setCreated={setCreated} />
			</Modal>
		</BodyWrapper>
	);
};

export default Pipeline;
