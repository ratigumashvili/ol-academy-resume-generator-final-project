import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <h1>
      Page not found, <Link to="/">Go home</Link>
    </h1>
  );
};

export default NotFound;
