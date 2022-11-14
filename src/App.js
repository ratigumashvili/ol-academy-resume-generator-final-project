import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Templates from "./pages/Templates";
import Create from "./pages/Create";
import Export from "./pages/Export";
import Edit from "./pages/Edit";
import Stored from "./pages/Stored";
import NotFound from "./pages/NotFound";
import { getFormData } from "./helpers/getFormData";

function App() {
  const [values, setValues] = useState(getFormData);
  const [resumes, setResumes] = useState(
    JSON.parse(localStorage.getItem("all-resumes")) || []
  );
  return (
    <div className="App container">
      <h1>Resume generator</h1>
      <Routes>
        <Route path="/*" element={<NotFound />} />
        <Route index element={<Home />} />
        <Route path="/choose-template" element={<Templates />} />
        <Route
          path="/create"
          element={<Create values={values} setValues={setValues} />}
        />
        <Route
          path="/export"
          element={<Export resumes={resumes} setResumes={setResumes} />}
        />
        <Route path="/import-resume" element={<Edit setValues={setValues} />} />
        <Route path="/stored_resumes" element={<Stored resumes={resumes} />} />
      </Routes>
    </div>
  );
}

export default App;
