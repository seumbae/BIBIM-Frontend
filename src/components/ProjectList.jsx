import styled from "styled-components";
import ResultCount from "../containers/Dashboard/ResultCount";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import SettingsIcon from "@mui/icons-material/Settings";
import Collapse from "@mui/material/Collapse";
import Branch from "./Branch";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projectPrecisionCount } from "../services/axios";

const ListWrapper = styled.div`
	max-width: 100%;
	background-color: #ffffff;
	border-radius: 6.4px;
	padding: 16px;
`;

const MainContentWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

const ProjectInfoWrapper = styled.div`
	width: 100%;
	display: flex;
	gap: 1rem;
	align-items: center;
`;

const ProjectTitle = styled(Link)`
	text-decoration: none;
	color: inherit;
	font-size: 1.2rem;
	font-weight: 500;
	cursor: pointer;
`;

const Result = styled.div`
	background-color: ${({ result }) =>
		result === undefined ? "#EEEEF2" : result ? "#00AA00" : "#FF0000"};
	padding: 4px 12px;
	font-size: 0.8rem;
	border-radius: 1.5rem;
	display: flex;
	align-items: center;
`;

const CountWrapper = styled.div`
	display: flex;
	gap: 0.5rem;
`;
const MoreIcon = styled(ExpandMoreIcon)`
	&:hover {
		cursor: pointer;
	}
`;
const LessIcon = styled(ExpandLessIcon)`
	&:hover {
		cursor: pointer;
	}
`;

const SubContentWrapper = styled.div`
	display: flex;
	margin-top: 1rem;
	justify-content: space-between;
	align-items: center;
`;
const Detail = styled.div`
	display: flex;
	gap: 2rem;
`;
const Box = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
`;

const AlpaScore = styled.div`
	background-color: ${({ score }) =>
		(score === undefined && "#EEEEF2") ||
		(score === "D" && "#FF1900") ||
		(score === "C" && "#F58737") ||
		(score === "B" && "#F5C037") ||
		(score === "A" && "#00AA00") ||
		(score === "E" && "#4A4A4A")};
	color: #ffffff;
	border-radius: 50%;
	width: 2rem;
	height: 2rem;
	text-align: center;
	line-height: 2.1rem;
`;

const SettingIcon = styled(SettingsIcon)`
	&:hover {
		cursor: pointer;
	}
`;

const ProjectList = ({ data, setPassed, setFailed }) => {
	const [issue, setIssue] = useState([]);
	const [issueLoading, setIssueLoading] = useState(true);
	const [totalIssue, setTotalIssue] = useState(0);
	const [open, setOpen] = useState(false);
	const onHandleIconClick = () => {
		setOpen(!open);
	};
	useEffect(() => {
		projectPrecisionCount(data.pipeline_name)
			.then((res) => {
				if (res.data.status === 200) {
					setIssue(res.data.result);
					setTotalIssue(
						Object.values(res.data.result.precision).reduce(
							(acc, cur) => acc + cur,
							0
						)
					);
				} else if (res.data.status === 500) {
					setIssue({
						grade: undefined,
						precision: { Critical: 0, Major: 0, Minor: 0, Info: 0, None: 0 },
						qualityGate: undefined,
					});
				}
				if (res.data.result.qualityGate === true) {
					setPassed((prev) => prev + 1);
				} else if (res.data.result.qualityGate === false) {
					setFailed((prev) => prev + 1);
				}
			})
			.then(() => {
				setIssueLoading(false);
			});
	}, []);
	return (
		<ListWrapper>
			<MainContentWrapper>
				<ProjectInfoWrapper>
					<ProjectTitle
						to={`/dev/${data.pipeline_name}/status`}
						state={{ data: data, issue: issue }}
					>
						{data.pipeline_name}
					</ProjectTitle>
					<Branch name={data.branch} />
					<Result result={issue.qualityGate}>
						<div style={{ color: "#FFFFFF" }}>
							{issue.qualityGate === undefined
								? "None"
								: issue.qualityGate
								? "Passed"
								: "Failed"}
						</div>
					</Result>
				</ProjectInfoWrapper>
				<CountWrapper>
					{issueLoading
						? null
						: Object.entries(issue.precision).map((item) => {
								return <ResultCount key={item[0]} data={item} />;
						  })}
					{open ? (
						<MoreIcon onClick={onHandleIconClick} />
					) : (
						<LessIcon onClick={onHandleIconClick} />
					)}
				</CountWrapper>
			</MainContentWrapper>
			<Collapse in={open}>
				<SubContentWrapper>
					<Detail>
						<Box>
							<div>Security Score</div>
							<AlpaScore score={issue.grade}>
								{issue.grade === undefined ? "N" : issue.grade}
							</AlpaScore>
						</Box>
						<Box>
							<div>Vulnerabilities</div>
							<div>{totalIssue}</div>
						</Box>
						<Box>
							<div>{data.jenkinsfile_name}</div>
						</Box>
						<Box>
							<div>12 hours ago</div>
						</Box>
					</Detail>
					<SettingIcon />
				</SubContentWrapper>
			</Collapse>
		</ListWrapper>
	);
};

export default ProjectList;
