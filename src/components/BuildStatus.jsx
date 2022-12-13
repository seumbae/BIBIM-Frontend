import styled, { keyframes } from "styled-components";
import LoopIcon from "@mui/icons-material/Loop";
import { useState } from "react";

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

const ProjectTitle = styled.div`
	font-size: 0.8rem;
	font-weight: 600;
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

const BuildStatus = ({ status }) => {
	const [open, setOpen] = useState(true);
	const onHandleCancel = () => {
		// TODO: API call to cancel the build
		setOpen(false);
		console.log("cancel");
	};
	return (
		<>
			{open ? (
				<Container>
					<StyledLoopIcon />
					<DetailArea>
						<TitleArea>
							<ProjectTitle>dev-pipeline-3</ProjectTitle>
							<Cancel onClick={onHandleCancel}>Cancel</Cancel>
						</TitleArea>
						<ProgressArea>
							<Progress>In Progress</Progress>
							<Date>2022-10-21 15:20</Date>
						</ProgressArea>
					</DetailArea>
				</Container>
			) : null}
		</>
	);
};

export default BuildStatus;
