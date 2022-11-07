import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/Login";
import DevDashboard from "./pages/DevDashboard";
import Header from "./components/common/Header";
import MainNav from "./components/common/MainNav";

function App() {
  return (
    // <Router>
      <Routes>
        <Route path="login" element={<LoginPage />}></Route>
        {/* <Route element={[<Header />, <MainNav />]}>
          <Route path="dev" element={<DevDashboard />}>hello</Route>
        </Route> */}
        <Route path="dev" element={<DevDashboard />}></Route>
      </Routes>
    // </Router>
  );
}

export default App;
