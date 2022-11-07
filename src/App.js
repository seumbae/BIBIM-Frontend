import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Login from "./pages/signin";
import Signup from "./pages/signup";
import Dev from "./pages/dev/dev";
import Sec from "./pages/sec/sec";
import Ops from "./pages/ops/ops";
import Admin from "./pages/admin/admin";
import { useState } from "react";
import Logined from "./components/Logined";
import DevHome from "./components/DevHome";
import DevResult from "./components/DevResult";
import DevIndex from "./components/DevIndex";

function App() {
  const [login, setLogin] = useState(false);
  const [name, setName] = useState("")
  const [permission, setPermission] = useState(0);
  return (<>
    <Routes>
      <Route element={<DevIndex/>}>
        <Route path="/dev" element={<Dev name={name}/>}>
          <Route path="dashboard" element={<DevHome/>}/>
        </Route>
      </Route>
      {/* <Route path="/" element={<Login setLogin={setLogin} setName={setName}/>}></Route> */}
      {/* <Route path="/signup" element={<Signup />}></Route> */}
      {/* privte Routes */}
      {/* <Route path="/sec" element={<Sec />}></Route> */}
      {/* <Route path="/ops" element={<Ops />}></Route>  */}
      {/* <Route path="/admin" element={<Admin />}></Route> */}
    </Routes>
    </>
  );
}

export default App;
