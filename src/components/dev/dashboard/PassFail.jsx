import styled from "styled-components";

const PassComponenet = styled.div`
  background-color: #00AA00;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  flex: 1;
  border-radius: 0 6.4px 6.4px 0;
  gap: 0.5rem;
`
const FailComponenet = styled.div`
  background-color: #DD4433;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  flex: 1;
  border-radius: 6.4px 0 0 6.4px;
  gap: 0.5rem;
`
const Result = () => {
  return (<>
    <FailComponenet>
      <div>Failed</div>
      <div>4</div>
    </FailComponenet>
    <PassComponenet>
      <div>Passed</div>
      <div>4</div>
    </PassComponenet>
    </>

  );
}

export default Result;