import styled from "styled-components";

const ResultWrapper = styled.div`
  background-color: ${({ result }) => {
		if (result) {
			return "#00AA00";
		} else {
			return "#FF0000";
		}
	}};
  width: 260px;
  height: 130px;
  padding 18px;
  color: #FFFFFF;
  position: relative;
`;
const Result = styled.div`
	font-size: 2rem;
`;

const FoundedCondtion = styled.div`
	position: absolute;
	right: 18px;
	bottom: 18px;
`;

const Condition = ({ result }) => {
	return (
		<ResultWrapper result={result}>
			<Result>{result ? "Passed" : "Failed"}</Result>
			<FoundedCondtion>All condition passed</FoundedCondtion>
		</ResultWrapper>
	);
};

export default Condition;
