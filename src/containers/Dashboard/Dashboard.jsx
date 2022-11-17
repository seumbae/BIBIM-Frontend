import styled from "styled-components";
import ResultComponent from "./StatisticsCount";
import ProjectList from "./ProjectList";
import Graph from "./Graph";
import TooltipIcon from "../../components/Tooltip";

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
	display: flex;
  justify-content: space-between;
	gap: 1rem;
`;

const ProjectStatistics = styled.div`
	background-color: #eeeef2;
	padding: 26px 21px;
	display: flex;
	flex: 1;
	flex-direction: column;
	gap: 1rem;
	border-radius: 6.4px;
`;
const ProjectItems = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #ffffff;
	padding: 0.6rem 1rem;
	border-radius: 6.4px;
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
`

const ResultStatisticsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
` 
const ResultItems = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #ffffff;
	// padding: 0.6rem 1rem;
	border-radius: 6.4px;
`;

const Title = styled.div`
	padding: 0.6rem 1rem;
`;

const ResultWrapper = styled.div`
	display: flex;
	width: 60%;
	height: 100%;
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
`
const SummaryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const GraphWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`
const GraphBody = styled.div`
  background-color: #FFFFFF;
  border-radius: 6.4px;
  display: flex;
  flex-direction: column;
  padding: 21px 21px 21px 0px;
  gap: 1rem;
`
const GraphTitle = styled.div`
  font-size: 1rem;
  margin-left: 1.2rem;
  font-weight: 400;
`
/* Entire Project Scan Result */
const ScanListWrapper = styled.div`
  max-width: 100%;
  background-color: #eeeef2;
  border-radius: 6.4px;
  padding: 21px 21px;
  display: flex;
  flex-direction: column;
  gap : 0.8rem;
`

const Dashboard = () => {
	const ProjectTitle = {
		first: { name: "Projects", value: 1 },
		second: { name: "Lines", value: 2 },
		third: { name: "Vulnerabilities", value: 3 },
	};
	const ResultTitle = {
		Releasability: { Failed: 2, Passed: 4 },
    Reliabilities: { D: 1, C: 2, B: 4, A: 6 },
    Vulnerabilities: {D:2, C:3, B:5, A:2 },
	};

	return (
		<ContentsWrapper>
			<StatusWrapper>
				<ProjectStatistics>
					{Object.values(ProjectTitle).map((item) => {
						return (
							<ProjectItems>
								<div>{item.name}</div>
								<div>{item.value}</div>
							</ProjectItems>
						);
					})}
				</ProjectStatistics>
				<ResultStatistics>
          <IconWrapper>
            <TooltipIcon />
          </IconWrapper>
          <ResultStatisticsWrapper>
					{Object.entries(ResultTitle).map((item) => {
						return (
							<ResultItems>
								<Title>{item[0]}</Title>
								<ResultWrapper>
                  <ResultComponent 
                    item={item}
                  />
								</ResultWrapper>
							</ResultItems>
						);
					})}
          </ResultStatisticsWrapper>
				</ResultStatistics>
			</StatusWrapper>
      {/* Entire Project Summary Graph */}
      <SummaryWrapper>
        <SummaryHeader>
          <div>전체 프로젝트 요약</div>
          <TooltipIcon/>
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
        {/* Need to transfer props */}
        <ProjectList projectTitle={'dev-pipeline-2'} branchName={'main'} result={'Passed'}/>
        <ProjectList projectTitle={'dev-pipeline-3'} branchName={'main'} result={'Failed'}/>
      </ScanListWrapper>
		</ContentsWrapper>
	);
};

export default Dashboard;
