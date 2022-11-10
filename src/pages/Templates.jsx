import { Link } from "react-router-dom";

const Templates = () => {
  return (
    <div className="container">
      <h2>Templates</h2>
      <div className="row">
        <div className="col-sm-12 col-md-6">
          Switch toggle <br /> color picker
        </div>
        <div className="col-sm-12 col-md-6">Theme</div>
        <div className="col-sm-12">
          <Link to="/create">Select This Theme</Link>
        </div>
      </div>
    </div>
  );
};

export default Templates;
