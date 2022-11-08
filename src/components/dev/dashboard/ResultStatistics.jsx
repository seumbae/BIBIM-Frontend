import styled from "styled-components";
import ResultComponent from "./PassFail";

const Background = styled.div`
  width: 50%;
  height: 10rem;
  background-color: #EEEEF2;
  padding: 26px 21px;
  display: flex;
  flex: 3.5;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  border-radius: 6.4px;
`
const Statistics = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFF;
  // padding: 0.6rem 1rem;
  border-radius: 6.4px;
`
const Title = styled.div`
  padding: 0.6rem 1rem;
`

const Result = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
`

const ResultStatistics = () => {
  const title = ['Releasability', 'Reliabilities', 'Vulnerabilities'];
  return (
    <Background>
      { title.map((item) => {
          return (
            <Statistics>
              <Title>{item}</Title>
              <Result>
                <ResultComponent />
              </Result>
            </Statistics>
      )})}
    </Background>
  );
}

export default ResultStatistics;