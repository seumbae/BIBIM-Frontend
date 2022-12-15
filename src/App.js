import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./containers/Login/Login";
import MainLayout from "./containers/common/MainLayout";
import DetailLayout from "./containers/common/DetailLayout";
import Dashboard from "./containers/Dashboard/Dashboard";
import Pipeline from "./containers/Pipeline/Pipeline";
import Profile from "./containers/Profile/Profile"
import DetailStatusPage from "./containers/ProjectDetail/Status/Status";
import AllDetailIssueContainer from "./containers/detail-issue/AllDetailIssue";
import ConfigurationContainer from "./containers/user/Configuration";
import Jenkins from "./containers/Jenkins/Jenkins";
import ProjectConfiguration from "./containers/ProjectDetail/Configuration/Configuration";
import ProjectIssuse from "./containers/ProjectDetail/Issues/Issues";
import ProjectProfile from "./containers/ProjectDetail/Profile/Profile";
import ProejctHistory from "./containers/ProjectDetail/History/History";
import ProjectBuild from "./containers/Build/Build";

/* 로그인 여부 확인해야함 */
function App() {
  return (
    <Routes>
      <Route path="" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />}></Route>
      <Route element={<MainLayout />}>
        <Route path="/dev" element={<Dashboard />} /> 
        <Route path="/dev/profile" element={<Profile />} />
        <Route path="/dev/issues" element={<AllDetailIssueContainer />} />
        <Route path="/dev/jenkinsfile" element={<Jenkins />} />
        <Route path="/dev/pipeline" element={<Pipeline />} />
      </Route>
      <Route element={<DetailLayout />}>
        <Route path="/dev/:projectTitle/status" element={<DetailStatusPage />} />
        <Route path="/dev/:projectTitle/profile" element={<ProjectProfile />} />
        <Route path="/dev/:projectTitle/issues" element={<ProjectIssuse />} />
        <Route path="/dev/:projectTitle/history" element={<ProejctHistory />} />
        <Route path="/dev/:projectTitle/configuration" element={<ProjectConfiguration />} />
      </Route>
      <Route path="/dev/:projectTitle/build" element={<ProjectBuild />} />
      <Route path="/configuration" element={<ConfigurationContainer />} />
    </Routes>
  );
}

export default App;