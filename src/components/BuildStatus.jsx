import styled, { keyframes } from "styled-components";
import LoopIcon from "@mui/icons-material/Loop";
import { useState } from "react";
import { useContext } from "react";
import { BuildContext } from "../store/BuildContext";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { stopPipeline } from "../services/axios";

const rotation = keyframes`
  from{
      transform: rotate(0deg);
  }
  to{
      transform: rotate(-360deg);
  }
`;

const Container = styled.div`
	background-color: #eeeef2;
	display: flex;
	border-radius: 6.4px;
	padding: 0.6rem 0.5rem;
	gap: 0.3rem;
`;

const StyledLoopIcon = styled(LoopIcon)`
	width: 1.2rem !important;
	height: 1.2rem !important;
	animation: ${rotation} 3s linear infinite;
`;

const DetailArea = styled.div`
	flex: 1;
`;

const TitleArea = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const ProjectTitle = styled(Link)`
	font-size: 0.8rem;
	font-weight: 600;
	text-decoration: none;
	color: inherit;
`;

const Cancel = styled.div`
	font-size: 0.6rem;
	color: #555555;
	cursor: pointer;
`;

const ProgressArea = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 0.4rem;
`;

const Progress = styled.div`
	font-size: 0.6rem;
	color: #555555;
`;

const Date = styled.div`
	font-size: 0.6rem;
	color: #555555;
`;

const BuildStatus = ({ pipeline }) => {
	const buildContext = useContext(BuildContext);
	const [data, setData] = useState([]);
	const [open, setOpen] = useState(true);
	const onHandleCancel = () => {
		if (window.confirm("진행중인 빌드가 취소됩니다. 정말 취소하시겠습니까?")) {
			stopPipeline({pipeline_name: pipeline, branch: data[0].branch}).then((res) => console.log(res));
			alert("빌드가 정상적으로 취소되었습니다.");
			setOpen(false);
			buildContext.modifyStatus(pipeline);
		}
	};

	useEffect(() => {
		setData(
			buildContext.pipeline.filter((item) => item.pipeline_name === pipeline)
		);
	}, [buildContext.pipeline]);

	return (
				<Container>
					<StyledLoopIcon />
					<DetailArea>
						<TitleArea>
							<ProjectTitle
								to={`/dev/${pipeline}/build`}
								state={{ pipeline: data }}
							>
								{pipeline}
							</ProjectTitle>
							<Cancel onClick={onHandleCancel}>Cancel</Cancel>
						</TitleArea>
						<ProgressArea>
							<Progress>In Progress</Progress>
							<Date>2022-10-21 15:20</Date>
						</ProgressArea>
					</DetailArea>
				</Container>
	);
};

export default BuildStatus;
