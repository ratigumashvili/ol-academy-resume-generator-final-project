import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Templates from "./pages/Templates";
import Create from "./pages/Create";
import Export from "./pages/Export";
import Edit from "./pages/Edit";
import Stored from "./pages/Stored";
import NotFound from "./pages/NotFound";
import LoadingSpinner from "./components/LoadingSpinner";
import useFetch from "./hooks/useFetch";
import { getFormData } from "./helpers/helpers";

function App() {
  const { fetchedData, loading } = useFetch();
  const [values, setValues] = useState(getFormData);
  const [resumes, setResumes] = useState(
    JSON.parse(localStorage.getItem("all-resumes")) || []
  );

  if (loading) {
    return <LoadingSpinner />;
  }

  console.log(fetchedData);

  return (
    <div className="App container">
      <h1 className="app-title">
        <Link to="/">Resume generator</Link>
      </h1>
      <Routes>
        <Route path="/*" element={<NotFound />} />
        <Route index element={<Home resumes={resumes} />} />
        <Route
          path="/choose-template"
          element={<Templates setValues={setValues} />}
        />
        <Route
          path="/create"
          element={<Create values={values} setValues={setValues} />}
        />
        <Route
          path="/export"
          element={
            <Export
              resumes={resumes}
              setResumes={setResumes}
              setValues={setValues}
            />
          }
        />
        <Route path="/import-resume" element={<Edit setValues={setValues} />} />
        <Route
          path="/stored_resumes"
          element={<Stored resumes={resumes} setResumes={setResumes} />}
        />
      </Routes>
    </div>
  );
}

export default App;
