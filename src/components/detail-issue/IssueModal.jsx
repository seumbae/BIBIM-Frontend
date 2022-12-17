import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

const ModalContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 35rem;
	background-color: #ffffff;
	border: 2px solid #ffffff;
	padding: 2rem;
	max-height: 700px;
	overflow: auto;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const Wrapper = styled.div``;
const Title = styled.div`
	font-size: 1rem;
`;

const Detail = styled.div`
	font-size: 0.8rem;
`;

const Close = styled(CloseIcon)`
	cursor: pointer;
`;
const IssueModal = ({setOpen, data, pipelineName, stage }) => {
	const onHandleClose = () => {
		setOpen(false);
	};
  return (
		<ModalContainer>
			<Wrapper>
				<Container><Title>Issue title</Title><Close sx={{fontSize: 20}} onClick={onHandleClose} /></Container> 
				<Detail>{data.message}</Detail>
			</Wrapper>
			<Wrapper>
				<Title>Description</Title>
				<Detail>{data.description}</Detail>
			</Wrapper>
      <Wrapper>
				<Title>Pipeline</Title>
				<Detail>{pipelineName}</Detail>
			</Wrapper>
      <Wrapper>
				<Title>Target</Title>
				<Detail>{data.uri.charAt(0) !== "/" ? " /" + data.uri : " " + data.uri}</Detail>
			</Wrapper>
			<Wrapper>
				<Title>Score</Title>
				<Detail>
					{data.cvssv3 === 0 || data.cvssv3 === null
						? "Not Exist"
						: parseFloat(data.cvssv3).toFixed(2)}
				</Detail>
			</Wrapper>
      <Wrapper>
				<Title>Vulnerability</Title>
				<Detail>{data.bibimPrecision}</Detail>
			</Wrapper>
      <Wrapper>
				<Title>Stage</Title>
				<Detail>{stage}</Detail>
			</Wrapper>
			<Wrapper>
				<Title>CWE</Title>
				<Detail>{data.cweId === 0 ? "Not Exist" : `CWE-${data.cweId}`}</Detail>
			</Wrapper>
      <Wrapper>
				<Title>Level</Title>
				<Detail>{data.toolProblemSeverity === "" ? "Not Exist" : data.toolProblemSeverity}</Detail>
			</Wrapper>
      <Wrapper>
				<Title>Precision</Title>
				<Detail>{data.toolPrecision}</Detail>
			</Wrapper>
      <Wrapper>
				<Title>Tool Severity</Title>
				<Detail>{data.toolSeverity}</Detail>
			</Wrapper>
		</ModalContainer>
	);
};

export default IssueModal;
