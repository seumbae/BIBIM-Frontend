import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Login from "./components/signin";
import Signup from "./components/signup";
import Dev from "./routes/dev";
import Sec from "./routes/sec";
import Ops from "./routes/ops";
import Admin from "./routes/admin";
import { useState } from "react";
import Logined from "./components/Logined";


function App() {
  const [login, setLogin] = useState(false);
  const [name, setName] = useState("")
  return (<>
    {login ? <Logined name={name} /> : null}

    <Routes>
      <Route path="/" element={<Login setLogin={setLogin} setName={setName}/>}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      {/* privte Routes */}
          <Route path="/dev" element={<Dev />}></Route>
          <Route path="/sec" element={<Sec />}></Route>
          <Route path="/ops" element={<Ops />}></Route> 
          <Route path="/admin" element={<Admin />}></Route>
    </Routes>
    </>
  );
}

export default App;
