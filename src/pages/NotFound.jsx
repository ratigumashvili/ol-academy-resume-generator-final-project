import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <h3 className="component-heading">
      Page not found, <Link to="/">Go home</Link>
    </h3>
  );
};

export default NotFound;
