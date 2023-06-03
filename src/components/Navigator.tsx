import { Link } from "react-router-dom";

const Navigator = () => {
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
    </div>
  );
};

export default Navigator;
