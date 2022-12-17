import { useEffect, useState } from "react";
import styled from "styled-components";
import VerticalLine from "../../components/VerticalLine";

const Container = styled.div`
	padding: 1rem;
	width: 200px;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 3rem;
`;

const InnerContainer = styled.div`
	display: flex;
	background-color: #ffffff;
	align-items: center;
	justify-content: center;
	border-radius: 6.4px;
`;
const Stage = styled.div`
	font-size: 1.3rem;
	font-weight: 600;
	color: ${({ name }) =>
		(name === "Critical" && "#FF1900") ||
		(name === "Major" && "#F58737") ||
		(name === "Minor" && "#F5C037") ||
		(name === "Info" && "#00AA00") ||
		(name === "None" && "#EEEEF2")};
	align-self: flex-start;
`;

const Count = styled.div`
	font-size: 3rem;
	font-weight: 700;
	margin-right: 1rem;
	color: ${({ name }) =>
		(name === "Critical" && "#FF1900") ||
		(name === "Major" && "#F58737") ||
		(name === "Minor" && "#F5C037") ||
		(name === "Info" && "#00AA00") ||
		(name === "None" && "#EEEEF2")};
`;

const StageIssueContiner = styled.div`
	display: flex;
	justify-content: space-between;
`;

const StageVul = ({ data }) => {
	const [critical, setCritical] = useState(0);
	const [major, setMajor] = useState(0);
	const [minor, setMinor] = useState(0);
	const [info, setInfo] = useState(0);
	const [none, setNone] = useState(0);

	useEffect(() => {
		Object.entries(data).forEach(([key, value]) => {
			if (key === "Critical") setCritical(value);
			if (key === "Major") setMajor(value);
			if (key === "Minor") setMinor(value);
			if (key === "Info") setInfo(value);
			if (key === "None") setNone(value);
		});
	}, [data]);

	return (
		<StageIssueContiner>
			<Container>
				<InnerContainer>
					<Count name="Critical">{critical}</Count>
					<Stage name="Critical">Critical</Stage>
				</InnerContainer>
			</Container>
			<VerticalLine />
			<Container>
				<InnerContainer>
					<Count name="Major">{major}</Count>
					<Stage name="Major">Major</Stage>
				</InnerContainer>
			</Container>
			<VerticalLine />
			<Container>
				<InnerContainer>
					<Count name="Minor">{minor}</Count>
					<Stage name="Minor">Minor</Stage>
				</InnerContainer>
			</Container>
			<VerticalLine />
			<Container>
				<InnerContainer>
					<Count name="Info">{info}</Count>
					<Stage name="Info">Info</Stage>
				</InnerContainer>
			</Container>
			<VerticalLine />
			<Container>
				<InnerContainer>
					<Count name="None">{none}</Count>
					<Stage name="None">None</Stage>
				</InnerContainer>
			</Container>
		</StageIssueContiner>
	);
};

export default StageVul;
