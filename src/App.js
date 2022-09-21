import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Login from "./components/login";
import Signup from "./routes/signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
