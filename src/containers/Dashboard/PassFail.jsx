import styled from "styled-components";

const PassComponenet = styled.div`
  background-color: #00AA00;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  border-radius: 0 6.4px 6.4px 0;
  flex: ${props => props.passVal};
  gap: 0.5rem;
`
const FailComponenet = styled.div`
  background-color: #DD4433;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  border-radius: 6.4px 0 0 6.4px;
  flex: ${props => props.failVal};
  gap: 0.5rem;
`
const Result = ({pass, fail}) => {
  return (<>
    <FailComponenet failVal={fail}>
      <div>Failed</div>
      <div>{fail}</div>
    </FailComponenet>
    <PassComponenet passVal={pass}>
      <div>Passed</div>
      <div>{pass}</div>
    </PassComponenet>
    </>

  );
}

export default Result;