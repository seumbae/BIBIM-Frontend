import styled from "styled-components";
import ProjectList from "../../../components/ProjectList";

const ContentsWrapper = styled.div`
	margin-top: 3rem;
	margin-right: 9%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	flex: 1;
  min-width: 1000px;
`;

const ScanListWrapper = styled.div`
	max-width: 100%;
	background-color: #eeeef2;
	border-radius: 6.4px;
	padding: 21px 21px;
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
`;

const Hisotry = () => {
	return (
		<ContentsWrapper>
			<ScanListWrapper>
				{/* Need to transfer props */}
				<ProjectList
					projectTitle={"test1"}
					branchName={"main"}
					result={"Passed"}
				/>
				<ProjectList
					projectTitle={"test2"}
					branchName={"main"}
					result={"Failed"}
				/>
			</ScanListWrapper>
		</ContentsWrapper>
	);
};

export default Hisotry;
