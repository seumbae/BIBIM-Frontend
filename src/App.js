import { Routes, Route } from "react-router-dom";
import ProjectDetailIssuePage from "./pages/ProjectDetailPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="test" element={<ProjectDetailIssuePage />}></Route>
      </Routes>
    </>
  );
}

export default App;