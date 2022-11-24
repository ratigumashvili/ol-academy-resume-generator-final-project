import { useEffect, useState } from "react";
import { Link, createSearchParams, useNavigate } from "react-router-dom";

import { getDataFromLS } from "../helpers/helpers";

const Home = ({ resumes }) => {
  const [lastAdded, setLastAdded] = useState(null);

  const template = getDataFromLS("template");
  const formValues = getDataFromLS("form");

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
        theme: template.theme,
        color: template.color,
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
