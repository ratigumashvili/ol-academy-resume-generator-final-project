import { useEffect, useState } from "react";
import { Link, createSearchParams, useNavigate } from "react-router-dom";

const Home = ({ resumes }) => {
  const [local, setLocal] = useState({});
  const [temp, setTemp] = useState(null);
  const template = localStorage.getItem("template");
  const formValues = localStorage.getItem("form");

  useEffect(() => {
    if (!template || !formValues) {
      return;
    }
    setLocal(JSON.parse(localStorage.getItem("template")));
  }, [formValues, template]);

  useEffect(() => {
    if (resumes.length !== 0) {
      setTemp(resumes.slice(-1)[0]);
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
      {temp && (
        <div className="homepage__bottom">
          <h3 className="component-heading">Last added resume</h3>
          <Link to="/stored_resumes">
            Name: {temp.data.name} Date: {temp.time}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
