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

function App() {
  const getFormData = () => {
    const storedValues = localStorage.getItem("form");
    if (!storedValues) {
      return formValues;
    }
    return JSON.parse(storedValues);
  };

  const { fetchedData, loading } = useFetch();
  const [formValues, setFormValues] = useState({
    name: "",
    contacts: "",
    proffSummary: "",
    skills: "",
    experience: "",
    education: "",
  });
  const [values, setValues] = useState(getFormData);
  const [resumes, setResumes] = useState(
    JSON.parse(localStorage.getItem("all-resumes")) || []
  );

  useEffect(() => {
    if (Object.keys(fetchedData).length !== 0) {
      setFormValues(fetchedData.formValues);
    }
  }, [fetchedData]);

  if (loading) {
    return <LoadingSpinner />;
  }

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
            <Templates setValues={setValues} fetchedData={fetchedData} />
          }
        />
        <Route
          path="/create"
          element={
            <Create
              values={values}
              setValues={setValues}
              fetchedData={fetchedData}
            />
          }
        />
        <Route
          path="/export"
          element={
            <Export
              resumes={resumes}
              setResumes={setResumes}
              setValues={setValues}
              getFormData={getFormData}
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
