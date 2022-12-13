import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginPage from "./containers/Login/Login";
import MainLayout from "./containers/common/MainLayout";
import DetailLayout from "./containers/common/DetailLayout";
import Dashboard from "./containers/Dashboard/Dashboard";
import Pipeline from "./containers/Pipeline/Pipeline";
import Issues from "./pages/dev/Issues";
import Profile from "./containers/Profile/Profile"
import DetailStatusPage from "./containers/ProjectDetail/Status/Status";
import AllDetailIssueContainer from "./containers/detail-issue/AllDetailIssue";
import ConfigurationContainer from "./containers/user/Configuration";
// import Header from "./components/common/Header";
// import MainNav from "./components/common/MainNav";
import Jenkins from "./containers/Jenkins/Jenkins";

/* 로그인 여부 확인해야함 */
function App() {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />}></Route>
      <Route element={<MainLayout />}>
        <Route path="/dev" element={<Dashboard />} /> 
        <Route path="/dev/profile" element={<Profile />} />
        <Route path="/dev/issues" element={<AllDetailIssueContainer />} />
        <Route path="/dev/jenkinsfile" element={<Jenkins />} />
        <Route path="/dev/pipeline" element={<Pipeline />} />
      </Route>
      <Route element={<DetailLayout />}>
        <Route path="/dev/:projectTitle/status" element={<DetailStatusPage />} />
        <Route path="/dev/:projectTitle/profile" element={<Issues />} />
        <Route path="/dev/:projectTitle/issues" element={<Issues />} />
        <Route path="/dev/:projectTitle/history" element={<Issues />} />
        <Route path="/dev/:projectTitle/configuration" element={<Issues />} />
      </Route>
      <Route path="/configuration" element={<ConfigurationContainer />} />
    </Routes>
  );
}

export default App;