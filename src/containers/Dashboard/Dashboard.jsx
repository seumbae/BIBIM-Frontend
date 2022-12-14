import { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { useContext } from "react";
import { BuildContext } from "../../store/BuildContext";
import { getStageIssueCount } from "../../services/axios";

import StageIssue from "./StageIssue";
import ProjectList from "../../components/ProjectList";
import Graph from "./Graph";
import TooltipIcon from "../../components/TooltipIcon";
import TooltipMsg from "../../components/Tooltip";
import ReleasabilityPieGraph from "./ReleasabilityPieGraph";
import SecurityGradePieGraph from "./SecurityGradePieGraph";
import VulnerabilityBarGraph from "./VulnerabilityBarGraph";

const ContentsWrapper = styled.div`
	margin-top: 3rem;
	margin-right: 9%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	flex: 1;
`;
const StatusWrapper = styled.div`
	justify-content: space-between;
	gap: 1rem;
`;

const ResultStatistics = styled.div`
	background-color: #eeeef2;
	padding: 0px 21px 26px 21px;
	display: flex;
	flex: 3.5;
	flex-direction: column;
	// justify-content: space-between;
	border-radius: 6.4px;
`;

const IconWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	height: 26px;
	align-items: center;
`;

const ResultStatisticsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const ContentTitle = styled.div`
	font-size: 1rem;
	font-weight: 500;
`;

/* Entire Project Summary Graph */
const SummaryWrapper = styled.div`
	max-width: 100%;
	background-color: #eeeef2;
	border-radius: 6.4px;
	padding: 21px 21px;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
const SummaryHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const GraphWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: nowrap;
	gap: 1rem;
`;
const GraphBody = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	border-radius: 6.4px;
	padding: 21px 21px 21px 0px;
	gap: 1rem;
`;
const GraphTitle = styled.div`
	font-size: 1rem;
	margin-left: 1.2rem;
	font-weight: 400;
`;
/* Entire Project Scan Result */
const ScanListWrapper = styled.div`
	max-width: 100%;
	background-color: #eeeef2;
	border-radius: 6.4px;
	padding: 21px 21px;
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
`;

const GraphArea = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: nowrap;
`;

const MediumGraph = styled.div`
	width: 350px;
	height: 250px;
`;

const Dashboard = () => {
	const buildContext = useContext(BuildContext);

	const [stageIssue, setStageIssue] = useState([
		{ SIS: 0 },
		{ SAST: 0 },
		{ DAST: 0 },
		{ SCA: 0 },
	]);

	const [summaryTooltip, setSummaryTooltip] = useState(false);
	const handleSummaryTooltipOpen = () => {
		setSummaryTooltip((prev) => !prev);
	};

	useLayoutEffect(() => {
		getStageIssueCount().then((res) => {
			setStageIssue(res.data.result);
		});
	}, []);

	return (
		<ContentsWrapper>
			<StageIssue data={stageIssue} />
			<StatusWrapper>
				<ResultStatistics>
					<IconWrapper>
						<TooltipIcon />
					</IconWrapper>
					<ResultStatisticsWrapper>
						<GraphArea>
							<MediumGraph>
								<ReleasabilityPieGraph />
							</MediumGraph>
							<MediumGraph>
								<SecurityGradePieGraph />
							</MediumGraph>
							<MediumGraph>
								<VulnerabilityBarGraph />
							</MediumGraph>
						</GraphArea>
					</ResultStatisticsWrapper>
				</ResultStatistics>
			</StatusWrapper>
			{/* Entire Project Summary Graph */}
			<SummaryWrapper>
				<SummaryHeader>
					<ContentTitle>전체 프로젝트 요약</ContentTitle>
					<TooltipMsg
						title="과거부터 현재까지 전체 프로젝트에 대한 요약"
						open={summaryTooltip}
						setOpen={setSummaryTooltip}
					>
						<div onClick={handleSummaryTooltipOpen}>
							<TooltipIcon />
						</div>
					</TooltipMsg>
				</SummaryHeader>
				<GraphWrapper>
					<GraphBody>
						<GraphTitle>Vulnerabilities</GraphTitle>
						<Graph />
					</GraphBody>
					<GraphBody>
						<GraphTitle>Reliabilities</GraphTitle>
						<Graph />
					</GraphBody>
				</GraphWrapper>
			</SummaryWrapper>
			{/* Entire Project Scan Result List */}
			<ScanListWrapper>
				<ContentTitle style={{ fontSize: "1.1rem" }}>Projects 1</ContentTitle>
				{/* Need to transfer props */}
				<ProjectList
					projectTitle={"test1"}
					branchName={"main"}
					result={"Passed"}
				/>
				<ProjectList
					projectTitle={"test2"}
					branchName={"main"}
					result={"Failed"}
				/>
			</ScanListWrapper>
		</ContentsWrapper>
	);
};

export default Dashboard;
