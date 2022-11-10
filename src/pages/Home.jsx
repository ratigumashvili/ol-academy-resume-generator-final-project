import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home
      <div className="homepage-nav">
        <Link to="/choose-template">Create a new resume</Link>
        <Link to="/import-resume">Edit existing resume</Link>
        <button className="btn">Next</button>
      </div>
    </div>
  );
};

export default Home;
