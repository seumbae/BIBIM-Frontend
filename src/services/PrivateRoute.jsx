import { useContext, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { BuildContext } from "../store/BuildContext";

const PrivateRoutes = () => {
  const buildContext = useContext(BuildContext);
  const isAuth = window.localStorage.getItem('user') || buildContext.isAuthenticated;
  if(window.localStorage.getItem('user') !== null){
    buildContext.login(window.localStorage.getItem('user'));
  }
  return (
    isAuth ? (<Outlet />) : <Navigate to="/login" />
  )
}

export default PrivateRoutes;
