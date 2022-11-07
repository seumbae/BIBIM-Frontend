import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dev from "./pages/dev/dev";
import { useState } from "react";
import DevHome from "./components/DevHome";
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
    </Routes>
    </>
  );
}

export default App;
