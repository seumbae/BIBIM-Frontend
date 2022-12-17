import { useEffect, useState } from "react";
import styled from "styled-components";
import { useContext } from "react";
import { BuildContext } from "../../store/BuildContext";
import {
	getStageIssueCount,
	allProjectPrecisionCount,
	getCwe25,
	getdashboardOwasp10,
} from "../../services/axios";
import Skeleton from "@mui/material/Skeleton";

import VulComponent from "../ProjectDetail/Status/Vulnerability";
import StageVul from "./StageVul";
import ProjectList from "../../components/ProjectList";
import TooltipIcon from "../../components/TooltipIcon";
import ReleasabilityPieGraph from "./ReleasabilityPieGraph";
import SecurityGradePieGraph from "./SecurityGradePieGraph";
import VulnerabilityBarGraph from "./VulnerabilityBarGraph";
import CwePieGraph from "./CwePieGraph";
import OwaspPieGraph from "./OwaspPieGraph";

const VulWrapper = styled.div`
	font-weight: 700;
`;
const Vul = styled.div`
	display: flex;
	justify-content: space-between;
`;

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
	gap: 2rem;
`;

const ContentTitle = styled.div`
	font-size: 1rem;
	font-weight: 500;
`;

const SummaryWrapper = styled.div`
	max-width: 100%;
	background-color: #eeeef2;
	border-radius: 6.4px;
	padding: 21px 21px;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const GraphWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	flex-wrap: nowrap;
	gap: 1rem;
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
const Skeletons = styled.div`
	background-color: #ffffff;
	border-radius: 6.4px;
	padding: 12px 8px;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;
const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

const LoadingSkeleton = () => {
	return (
		<>
			<Skeletons>
				<Wrapper>
					<Skeleton variant="text" width={200} sx={{ fontSize: "1rem" }} />
					<Skeleton variant="text" width={360} sx={{ fontSize: "1rem" }} />
				</Wrapper>
			</Skeletons>
		</>
	);
};

const Dashboard = () => {
	const buildContext = useContext(BuildContext);
	const [projectPrecisionCount, setProjectPrecisionCount] = useState([]);
	const [PrecisionLoading, setPrecisionLoading] = useState(false);
	const [stageIssue, setStageIssue] = useState([
		{ SIS: 0 },
		{ SAST: 0 },
		{ DAST: 0 },
		{ SCA: 0 },
	]);
	const [cwe, setCwe] = useState([]);
	const [cweLoading, setCweLoading] = useState(true);
	const [owasp, setOwasp] = useState([]);
	const [owaspLoading, setOwaspLoading] = useState(true);
	const [summaryTooltip, setSummaryTooltip] = useState(false);
	const [passed, setPassed] = useState(0);
	const [failed, setFailed] = useState(0);
	const [loading, setLoading] = useState(true);


	useEffect(() => {
		getStageIssueCount().then((res) => {
			setStageIssue(res.data.result);
		});
	}, []);

	useEffect(() => {
		getdashboardOwasp10()
			.then((res) => {
				if (res.data.status === 500) throw new Error("Can't load CWE25 Data.");
				setOwasp(res.data.result);
			})
			.then(setOwaspLoading(true))
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		getCwe25()
			.then((res) => {
				if (res.data.status === 500) throw new Error("Can't load CWE25 Data.");
				setCwe(res.data.result);
			})
			.then(setCweLoading(true))
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		allProjectPrecisionCount()
			.then((res) => {
				if (res.data.status === 500)
					throw new Error("Can't load all Projects Precision Count Data.");
				setProjectPrecisionCount(res.data.result);
			})
			.then(() => setPrecisionLoading(true))
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		if (buildContext.pipeline.length > 0) setLoading(false);
	}, [buildContext]);
	
	return (
		<ContentsWrapper>
			{PrecisionLoading ? (
				<StageVul data={projectPrecisionCount.precision} />
			) : null}

			<StatusWrapper>
				<ResultStatistics>
					<IconWrapper>
						<TooltipIcon />
					</IconWrapper>
					<ResultStatisticsWrapper>
						<GraphArea>
							<MediumGraph>
								<ReleasabilityPieGraph passed={passed} failed={failed} />
							</MediumGraph>
							<MediumGraph>
								{PrecisionLoading ? (
									<SecurityGradePieGraph item={projectPrecisionCount.grade} />
								) : null}
							</MediumGraph>
							<MediumGraph>
								<VulnerabilityBarGraph item={stageIssue} />
							</MediumGraph>
						</GraphArea>
						<GraphWrapper>
							<MediumGraph>
								{cweLoading ? <CwePieGraph cwe={cwe} /> : null}
							</MediumGraph>
							<MediumGraph>
								{cweLoading ? <OwaspPieGraph owasp={owasp} /> : null}
							</MediumGraph>
						</GraphWrapper>
					</ResultStatisticsWrapper>
				</ResultStatistics>
			</StatusWrapper>
			{/* <SummaryWrapper>
				<GraphWrapper>
					<MediumGraph>
						{cweLoading ? <CwePieGraph cwe={cwe} /> : null}
					</MediumGraph>
					<MediumGraph>
						{cweLoading ? <OwaspPieGraph owasp={owasp} /> : null}
					</MediumGraph>
				</GraphWrapper>
			</SummaryWrapper> */}
			<ScanListWrapper>
				<ContentTitle>
					전체 프로젝트{" "}
					{buildContext.pipeline.length === 0
						? "-"
						: buildContext.pipeline.length}
				</ContentTitle>
				{loading ? (
					<>
						<LoadingSkeleton /> <LoadingSkeleton />
					</>
				) : buildContext.pipeline.length > 0 ? (
					buildContext.pipeline.map((item, index) => {
						return (
							<ProjectList
								key={item.pipeline_name + index}
								data={item}
								setPassed={setPassed}
								setFailed={setFailed}
							/>
						);
					})
				) : null}
			</ScanListWrapper>
		</ContentsWrapper>
	);
};

export default Dashboard;
