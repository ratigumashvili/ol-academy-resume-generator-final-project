import { useEffect, useState } from "react";
import { Link, createSearchParams, useNavigate } from "react-router-dom";

import { getDataFromLS } from "../helpers/helpers";

const Home = ({ resumes }) => {
  const [local, setLocal] = useState({});
  const [lastAdded, setLastAdded] = useState(null);

  const template = localStorage.getItem("template");
  const formValues = localStorage.getItem("form");

  useEffect(() => {
    if ([template, formValues].some((item) => !item)) return;
    setLocal(getDataFromLS("template"));
  }, [formValues, template]);

  useEffect(() => {
    if (resumes.length !== 0) {
      setLastAdded(resumes.slice(-1)[0]);
    }
  }, [resumes]);

  const navigate = useNavigate();

  const handleNavigateWithParams = () => {
    navigate({
      pathname: "/create",
      search: createSearchParams({
        theme: local.theme,
        color: local.color,
      }).toString(),
    });
  };

  return (
    <div className="homepage">
      <div className="homepage-nav">
        <Link className="btn btn-cta" to="/choose-template">
          Create a new resume
        </Link>
        <Link className="btn btn-cta" to="/import-resume">
          Edit existing resume
        </Link>
        {formValues && (
          <button className="btn btn-cta" onClick={handleNavigateWithParams}>
            Continue
          </button>
        )}
      </div>
      {lastAdded && (
        <div className="homepage__bottom">
          <h3 className="component-heading">Last added resume</h3>
          <Link to="/stored_resumes">
            <b>Name</b>: {lastAdded.data.name} <b>Date</b>: {lastAdded.time}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
