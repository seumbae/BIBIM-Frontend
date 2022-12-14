import { useEffect, useState } from "react";
import styled from "styled-components";
import VerticalLine from "../../components/VerticalLine";

const Container = styled.div`
	padding: 1rem;
	width: 200px;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 3rem;
`;

const InnerContainer = styled.div`
	display: flex;
	background-color: #ffffff;
	align-items: center;
	justify-content: center;
	border-radius: 6.4px;
`;
const Stage = styled.div`
	font-size: 1.3rem;
	font-weight: 600;
	color: #707070;
	align-self: flex-start;
`;

const Count = styled.div`
	font-size: 3rem;
	font-weight: 700;
	margin-right: 1rem;
	color: #263690;
`;

const StageIssueContiner = styled.div`
	display: flex;
	justify-content: space-between;
`;

const StageIssue = ({ data }) => {
  const [sis, setSis] = useState([]);
  const [sast, setSast] = useState([]);
  const [dast, setDast] = useState([]);
  const [sca, setSca] = useState([]);

  useEffect(() => {
    data.map((item) => {
      if(item._id === "SIS") setSis(item)
      if(item._id === "SAST") setSast(item)
      if(item._id === "DAST") setDast(item)
      if(item._id === "SCA") setSca(item)
    })
  },[data])
  return (
		<StageIssueContiner>
			<Container>
				<InnerContainer>
					<Count>{sis.count}</Count>
					<Stage>{sis._id}</Stage>
				</InnerContainer>
			</Container>
      <VerticalLine />
      <Container>
				<InnerContainer>
					<Count>{sast.count}</Count>
					<Stage>{sast._id}</Stage>
				</InnerContainer>
			</Container>
      <VerticalLine />
      <Container>
				<InnerContainer>
					<Count>{dast.count}</Count>
					<Stage>{dast._id}</Stage>
				</InnerContainer>
			</Container>
      <VerticalLine />
      <Container>
				<InnerContainer>
					<Count>{sca.count}</Count>
					<Stage>{sca._id}</Stage>
				</InnerContainer>
			</Container>
		</StageIssueContiner>
	);
};

export default StageIssue;
