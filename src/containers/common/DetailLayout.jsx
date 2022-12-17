import { Outlet } from "react-router-dom";
import { BuildContext } from "../../store/BuildContext";
import styled from "styled-components";
import Header from "./Header";
import DetailNav from "./DetailNav";
import { useContext, useEffect, useState } from "react";

const Body = styled.div`
	display: flex;
	gap: 1.3rem;
`;

const Layout = () => {
	const buildContext = useContext(BuildContext);
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(buildContext.user);
  },[buildContext.user]);
	return (
		<>
			<Header userName={user} />
			<Body>
				<DetailNav />
				<Outlet />
			</Body>
		</>
	);
};

export default Layout;
