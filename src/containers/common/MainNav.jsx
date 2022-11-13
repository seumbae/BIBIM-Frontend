import styled from "styled-components";
import { useLocation, useNavigate, Link } from "react-router-dom";

const NavWarpper = styled.div`
	width: 13rem;
	height: 100vh;
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding-top: 3rem;
	margin-left:2.5rem;
	min-width: 11rem;
`;
const ContentWrapper = styled.div`
	background-color: ${(props) => (props.active ? "#EEEEF2" : "#FFFFFF")};
  height: 2.5rem;
  border-radius: 6.4px;
  display: flex;
  align-items: center;
`;

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
	return (
		<NavWarpper>
			<ContentWrapper active={isActive(`/dev`,location.pathname)}>
				<Content to='/dev'>DashBoard</Content>
			</ContentWrapper>
			<ContentWrapper active={isActive(`/dev/profile`, location.pathname)}>
				<Content to='/dev/profile'>Profile</Content>
			</ContentWrapper>
			<ContentWrapper active={isActive(`/dev/issues`, location.pathname)}>
				<Content to='/dev/issues'>Issues</Content>
			</ContentWrapper>
			<ContentWrapper active={isActive(`/dev/jenkinsfile`, location.pathname)}>
				<Content to='/dev/jenkinsfile'>Jenkins File</Content>
			</ContentWrapper>
			<ContentWrapper active={isActive(`/dev/pipeline`, location.pathname)}>
				<Content to='/dev/pipeline'>Pipeline</Content>
			</ContentWrapper>
		</NavWarpper>
	);
}

export default MainSideNav;