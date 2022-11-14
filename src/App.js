import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/Login";
import ProjectDetailIssuePage from "./pages/ProjectDetailPage"
import Layout from "./components/common/Layout";
import Dashboard from "./pages/dev/DashBoard";
import Issues from "./pages/dev/Issues";
import JenkinsFile from "./pages/dev/JenkinsFile"
import Pipeline from "./pages/dev/Pipeline"
import Profile from "./pages/dev/Profile"
// import Header from "./components/common/Header";
// import MainNav from "./components/common/MainNav";

/* 로그인 여부 확인해야함 */
function App() {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />}></Route>
      {/* 중첩 라우팅을 통해 Header와 Navbar를 노출시키고 싶은데, 
      아래와 같이 했을 경우 <DevDashboard /> 컴포넌트를 불러오지 못함 */}
      {/* <Route element={[<Header />, <MainNav />]}>
        <Route path="dev" element={<DevDashboard />}>hello</Route>
      </Route> */}
      <Route  element={<Layout />}>
        <Route path="dev" element={<Dashboard />} />
        <Route path="/dev/profile" element={<Profile />} />
        <Route path="/dev/issues" element={<Issues />} />
        <Route path="/dev/jenkinsfile" element={<JenkinsFile />} />
        <Route path="/dev/pipeline" element={<Pipeline />} />
      </Route>
      <Route path="test" element={<ProjectDetailIssuePage />}></Route>
    </Routes>
  );
}

export default App;