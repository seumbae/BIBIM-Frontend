import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
`
const Find = styled.div`
  color: #707070;
  padding-left: 0.1rem;
  &:hover {
    cursor: pointer;
  }
`
const SignUp = styled.div`
  color: #707070;
  &:hover {
    cursor: pointer;
  }
`

const Info = () => {
  return (
    /* Tooltip 생성 예정 */
  <Wrapper>
    <Find>Forgot Username/Password?</Find>
    <SignUp>Sign Up</SignUp>
  </Wrapper>
  );
}
export default Info;