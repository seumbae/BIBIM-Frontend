import styled from "styled-components";
import ProjectStatistics from "./ProjectStatistics";
import ResultStatistics from "./ResultStatistics";

const StatusWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 11.25rem;
  margin-top: 3rem;
  gap: 1rem;
`

const Status = () => {
  return (
    <StatusWrapper>
      <ProjectStatistics />
      <ResultStatistics />
    </StatusWrapper>
  )
};

export default Status;