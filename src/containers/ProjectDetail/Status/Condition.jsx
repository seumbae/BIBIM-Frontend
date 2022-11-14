import styled from "styled-components";

const ResultWrapper = styled.div`
  background-color: ${({text}) => {
    if (text === "Passed") {
      return "#00AA00";
    }
    if (text === "Failed") {
      return "#FF0000";
    }
  }};
  width: 260px;
  height: 130px;
  // padding: 9px 18px;
  padding 18px;
  color: #FFFFFF;
  position: relative;
`
const Result = styled.div`
  font-size: 2rem;
`

const FoundedCondtion = styled.div`
  position: absolute;
  right: 18px;
  bottom: 18px;
`

const Condition = ({result}) => {
  return (
  <ResultWrapper text={result}>
    <Result>{result.toUpperCase()}</Result>
    <FoundedCondtion>All condition passed</FoundedCondtion>
  </ResultWrapper>
  );
}

export default Condition;