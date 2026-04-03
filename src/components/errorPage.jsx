import { Link } from "react-router";

function Errorpage() {
  return (
    <div>
      <h1>This page does not exist.</h1>
      <Link to="/">Return to homepage.</Link>
    </div>
  );
}

export default Errorpage;
