import { Link, createSearchParams, useNavigate } from "react-router-dom";

const Home = () => {
  const data = JSON.parse(localStorage.getItem("generatedResume"));
  const formValues = localStorage.getItem("form");
  const theme = data[1];
  const color = data[2];
  const navigate = useNavigate();

  const handleNavigateWithParams = () => {
    navigate({
      pathname: "/create",
      search: createSearchParams({
        theme: theme,
        color: color,
      }).toString(),
    });
  };

  return (
    <div>
      Home
      <div className="homepage-nav">
        <Link to="/choose-template">Create a new resume</Link>
        <Link to="/import-resume">Edit existing resume</Link>
        {formValues && (
          <button className="btn" onClick={handleNavigateWithParams}>
            Continue
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
