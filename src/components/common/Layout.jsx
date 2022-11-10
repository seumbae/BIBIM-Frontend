import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import MainSideNav from "./MainNav";

const Body = styled.div`
  display: flex;
  gap: 1.3rem;
`

const Layout = () => {
  return (
    <div>
      <Header />
      <Body>
        <MainSideNav />
        <Outlet />
      </Body>      
    </div>
  );
}

export default Layout;