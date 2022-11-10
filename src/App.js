import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Templates from "./pages/Templates";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Stored from "./pages/Stored";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App container-fluid">
      <h1>Resume generator</h1>
      <Routes>
        <Route path="/*" element={<NotFound />} />
        <Route index element={<Home />} />
        <Route path="/choose-template" element={<Templates />} />
        <Route path="/create" element={<Create />} />
        <Route path="/import-resume" element={<Edit />} />
        <Route path="/stored_resumes" element={<Stored />} />
      </Routes>
    </div>
  );
}

export default App;
