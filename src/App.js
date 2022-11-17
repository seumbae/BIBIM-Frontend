import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginPage from "./containers/login/Login";
import MainLayout from "./containers/common/MainLayout";
import DetailLayout from "./containers/common/DetailLayout";
import Dashboard from "./containers/Dashboard/Dashboard";
import Issues from "./pages/dev/Issues";
import JenkinsFile from "./pages/dev/JenkinsFile"
import Pipeline from "./pages/dev/Pipeline"
import Profile from "./pages/dev/Profile"
import AllDetailIssueContainer from "./containers/detail-issue/AllDetailIssue";
import ConfigurationContainer from "./containers/user/Configuration";
// import Header from "./components/common/Header";
// import MainNav from "./components/common/MainNav";

/* 로그인 여부 확인해야함 */
function App() {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />}></Route>
      <Route element={<MainLayout />}>
        <Route path="/dev" element={<Dashboard />} /> 
        <Route path="/dev/profile" element={<Profile />} />
        <Route path="/dev/issues" element={<AllDetailIssueContainer />} />
        <Route path="/dev/jenkinsfile" element={<JenkinsFile />} />
        <Route path="/dev/pipeline" element={<Pipeline />} />
        <Route path="/dev/allIssues" element={<AllDetailIssueContainer />}></Route>
      </Route>
      <Route element={<DetailLayout />}>
        <Route path="/dev/:projectTitle/status" element={<Issues />} />
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