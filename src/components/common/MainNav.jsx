import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const NavWarpper = styled.div`
  width: 15rem;
  height: 100vh;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  padding-top: 3rem;
`
const ContentWrapper = styled.div`
  width: 80%;
`

const Content = styled.div`
  font-size: 1.2rem;
  cursor: pointer;
`


function MainSideNav() {
  const navigate = useNavigate();
  const contents = ['DashBoard', 'Profile', 'Issues', 'Jenkins File', 'Pipeline'];
  const onHandleClick = (e) => {
    const target = (e.target.innerText).toLowerCase();
    navigate(`/dev/${target}`);
  }
  
  return(
  <NavWarpper>
    {contents.map((content) => { 
      return <ContentWrapper><Content onClick={onHandleClick}>{content}</Content></ContentWrapper>
    })}
  </NavWarpper>
  );
}

export default MainSideNav;