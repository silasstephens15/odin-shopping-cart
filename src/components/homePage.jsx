import { Link } from "react-router";

function Homepage() {
  return (
    <div>
      <h1>Shopping Page</h1>
      <Link to={"/shop"}>Test</Link>
    </div>
  );
}

export { Homepage };
