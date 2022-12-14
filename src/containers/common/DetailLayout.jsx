import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import DetailNav from "./DetailNav";

const Body = styled.div`
	display: flex;
	gap: 1.3rem;
`;

const Layout = () => {
	return (
		<>
			<Header userName="admin" />
			<Body>
				<DetailNav />
				<Outlet />
			</Body>
		</>
	);
};

export default Layout;
