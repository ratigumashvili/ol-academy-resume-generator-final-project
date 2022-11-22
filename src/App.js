import { useEffect, useState } from "react";
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
import { getStoredValues } from "./helpers/helpers";

const inititalFormValues = {
  name: "",
  contacts: "",
  proffSummary: "",
  skills: "",
  experience: "",
  education: "",
};

function App() {
  const { fetchedData, loading } = useFetch();
  const [formValues, setFormValues] = useState(inititalFormValues);

  const [values, setValues] = useState(getStoredValues() || formValues);
  const [resumes, setResumes] = useState(
    JSON.parse(localStorage.getItem("all-resumes")) || []
  );

  useEffect(() => {
    if (fetchedData && Object.keys(fetchedData).length !== 0) {
      setFormValues(fetchedData?.formValues);
    }
  }, [fetchedData]);

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
          element={
            loading ? (
              <LoadingSpinner />
            ) : (
              <Templates setValues={setValues} fetchedData={fetchedData} />
            )
          }
        />
        <Route
          path="/create"
          element={
            loading ? (
              <LoadingSpinner />
            ) : (
              <Create
                values={values}
                setValues={setValues}
                fetchedData={fetchedData}
              />
            )
          }
        />
        <Route
          path="/export"
          element={
            <Export
              resumes={resumes}
              setResumes={setResumes}
              updateValues={() => setValues(getStoredValues() || formValues)}
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
