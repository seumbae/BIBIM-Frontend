import styled from "styled-components";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { runPipeline } from "../../../services/axios";

import Branch from "../../../components/Branch";
import HorizonLine from "../../../components/HorizonLine";
import VulComponent from "./Vulnerability";
import Tooltip from "../../../components/TooltipIcon";
import Condition from "./Condition";
import Score from "./Score";

const BodyWrapper = styled.div`
	margin-top: 3rem;
	margin-right: 9%;
	heigth: 100vh;
	display: flex;
	flex-direction: column;
	flex: 1;
	gap: 2rem;
`;
const DetatilWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

const HeaderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
`;
const TitleWrapper = styled.div`
	display: flex;
	gap: 0.5rem;
`;
const Title = styled.div`
	font-size: 1.3rem;
	font-weight: 700;
	margin-right: 1rem;
`;
const Button = styled.div`
	background-color: #eeeef2;
	padding: 4px 12px;
	width: 55px;
	height: 30px;
	font-size: 1rem;
	border-radius: 1.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;

const DetailInfoWrapper = styled.div`
	font-size: 0.9rem;
	color: #555555;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;
const OwnerRepoWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

const OwnerRepo = styled.div`
	display: flex;
	gap: 1rem;
`;
const JenkinsWrapper = styled.div`
	display: flex;
	gap: 1rem;
`;
const Tools = styled.div`
	font-size: 0.8rem;
	display: flex;
	gap: 1rem;
`;

const DescWrapper = styled.div`
	max-width: 70%;
`;

const VulWrapper = styled.div`
	font-weight: 700;
`;
const Vul = styled.div`
	display: flex;
	justify-content: space-between;
`;

const ConditionWrapper = styled.div``;
const SubTitle = styled.div`
	display: flex;
	gap: 1rem;
	font-weight: 700;
	margin-bottom: 1rem;
`;
const VerticalLine = styled.div`
	border-right: 1px solid #d4d4d4;
`;

const ConditionBody = styled.div`
	display: flex;
	gap: 1.5rem;
`;

const SecurityScoreWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	flex: 1;
`;
const SecurityScore = styled.div`
	display: flex;
	justify-content: space-between;
`;
const Scores = styled.div`
	display: flex;
	justify-content: space-between;
	margin-left: 2rem;
`;

const Status = () => {
	const location = useLocation();
	const [lastScan, setLastScan] = useState("24 hours ago");
	const [score, setScore] = useState({
		score: "A",
		reliability: "B",
		Vulnerability: "C",
	});
	const { data, issue } = location.state;
	const totalIssue = Object.values(issue.precision).reduce(
		(acc, cur) => acc + cur,
		0
	);

	const onHandleScan = () => {
		runPipeline({
			pipeline_name: data.pipeline_name,
			branch: data.branch,
		}).then((res) =>
			res.data.status === 200 ? alert("Scan Success") : alert("Scan Fail")
		);
	};

	return (
		<BodyWrapper>
			<DetatilWrapper>
				<HeaderWrapper>
					<TitleWrapper>
						<Title>{data.pipeline_name}</Title>
						<Branch name={data.branch} />
					</TitleWrapper>
					<Button onClick={onHandleScan}>Scan</Button>
				</HeaderWrapper>
				<DetailInfoWrapper>
					<OwnerRepoWrapper>
						<OwnerRepo>
							<div>Owner: {data.owner}</div>
							<div>Repository URL: {data.repo_url}</div>
						</OwnerRepo>
						<div>
							<div>Last analysis: {lastScan}</div>
						</div>
					</OwnerRepoWrapper>
					<JenkinsWrapper>
						<div>Jenkins File: {data.jenkinsfile_name}</div>
						<Tools>
							{Object.entries(data.tool_list).map(([key, value]) => {
								if (key !== "BUILD")
									return (
										<div key={key}>
											#
											{value[0].replace(/^[a-z]/, (char) => char.toUpperCase())}
										</div>
									);
							})}
						</Tools>
					</JenkinsWrapper>
					<DescWrapper>Description: {data.description}</DescWrapper>
				</DetailInfoWrapper>
			</DetatilWrapper>
			<HorizonLine />
			<VulWrapper>
				<SubTitle>VULNERABILITIES {totalIssue}</SubTitle>
				<Vul>
					{Object.entries(issue.precision).map(([key, value]) => {
						return <VulComponent key={key} name={key} val={value} />;
					})}
				</Vul>
			</VulWrapper>
			<HorizonLine />
			<ConditionWrapper>
				<div>
					<SubTitle>
						<div>RECENT CONDITION</div>
						<Tooltip />
					</SubTitle>
				</div>
				<ConditionBody>
					<Condition result={issue.qualityGate} />
					<VerticalLine />
					<SecurityScoreWrapper>
						<SecurityScore>
							<div style={{ display: "flex", gap: "1rem" }}>
								<div style={{ fontWeight: 600 }}>Security Score</div>
								<Tooltip />
							</div>
							<Score rank={issue.grade} />
						</SecurityScore>
						<Scores>
							<div>Reliability</div>
							<Score rank={score.reliability} />
						</Scores>
						<Scores>
							<div>Vulnerability</div>
							<Score rank={score.Vulnerability} />
						</Scores>
					</SecurityScoreWrapper>
				</ConditionBody>
			</ConditionWrapper>
		</BodyWrapper>
	);
};

export default Status;
