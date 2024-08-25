import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <div className="alert alert-primary">
        <p>404 Not Found</p>
        <Link className="btn btn-primary" to="/">
          Home
        </Link>
      </div>
    </>
  );
}

export default ErrorPage;
