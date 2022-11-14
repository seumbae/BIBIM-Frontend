import styled from "styled-components";
import { useLocation, Link, useParams, useNavigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Nav = styled.div`
  display: flex;
  flex-direction: column;
	width: 13rem;
  margin-left: 2.5rem;
  min-width: 11rem;
	heigth: 100vh;
`
const NavWarpper = styled.div`
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
const ContentWrapper = styled.div`
	background-color: ${(props) => (props.active ? "#EEEEF2" : "#FFFFFF")};
  height: 2.5rem;
  border-radius: 6.4px;
  display: flex;
  align-items: center;
`;
const IconWrapper = styled.div`
  display: flex;
  height: 3rem;
  align-items: center;
`
const Icon = styled(ArrowBackIosIcon)`
  font-size: 1rem Important!;
  cursor: pointer;
  padding-left: 1rem;
`
const Content = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 1.2rem;
  cursor: pointer;
  padding-left: 1rem;
`
function isActive(path, location) {
	//path가 현재 url과 같으면 true를 반환
	return path === location;
}

function MainSideNav() {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
	return (
    <Nav>
      <IconWrapper>
        <Icon onClick={() => navigate(-1)}/>
      </IconWrapper>
		  <NavWarpper>
		  	<ContentWrapper active={isActive(`/dev/${params.projectTitle}/status`,location.pathname)}>
		  		<Content to={`/dev/${params.projectTitle}/status`}>Status</Content>
		  	</ContentWrapper>
		  	<ContentWrapper active={isActive(`/dev/${params.projectTitle}/profile`, location.pathname)}>
		  		<Content to={`/dev/${params.projectTitle}/profile`}>Profile</Content>
		  	</ContentWrapper>
		  	<ContentWrapper active={isActive(`/dev/${params.projectTitle}/issues`, location.pathname)}>
		  		<Content to={`/dev/${params.projectTitle}/issues`}>Issues</Content>
		  	</ContentWrapper>
		  	<ContentWrapper active={isActive(`/dev/${params.projectTitle}/history`, location.pathname)}>
		  		<Content to={`/dev/${params.projectTitle}/history`}>History</Content>
		  	</ContentWrapper>
		  	<ContentWrapper active={isActive(`/dev/${params.projectTitle}/configuration`, location.pathname)}>
		  		<Content to={`/dev/${params.projectTitle}/configuration`}>Configuration</Content>
		  	</ContentWrapper>
		  </NavWarpper>
    </Nav>
	);
}

export default MainSideNav;
