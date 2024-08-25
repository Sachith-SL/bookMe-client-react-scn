import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function UpdateUser() {
  const params =useParams<{id:string}>();
  return (
    <>
      <div>Update User id: {[params.id]}</div>
      <Link className="btn btn-primary" to="/">
        Home
      </Link>
    </>
  );
}

export default UpdateUser;
