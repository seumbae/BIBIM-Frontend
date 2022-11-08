import styled from "styled-components";
import FormContainer from "../../containers/login/Form";
import Info from "./Info";

const LoginContainer = styled.div`
	width: 100%;
	height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`

const JoinLogin = () => {
	return (
    <LoginContainer>
	    <LoginWrapper>
        <Title>Login</Title>
        <FormContainer />
        <Info />
      </LoginWrapper>
	  </LoginContainer>
  );
};

export default JoinLogin;
