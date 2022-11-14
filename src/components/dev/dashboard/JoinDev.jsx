import styled from "styled-components";
import StatusComponent from "./Status";

const ContentsWrapper = styled.div`
  width: 100%;
  height: 100vh;
`

const DevDashboard = () => {
  return (
    <ContentsWrapper>
      <StatusComponent />
    </ContentsWrapper>
  );
}

export default DevDashboard;