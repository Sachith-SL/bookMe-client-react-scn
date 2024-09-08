import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

/**
 * Renders a form to update user information.
 *
 * @returns JSX.Element representing the UpdateUser component.
 */
function UpdateUser() {
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  interface UserData {
    name: string;
    mobile: string;
    isLoyalty: string;
  }

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/api/users", // replace with your API base URL
  });

  useEffect(() => {
    axiosInstance
      .get(`/${params.id}`) // replace with your endpoint
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const [user, setUser] = useState({
    id: "",
    name: "",
    mobile: "",
    isLoyalty: "", // default to 'false'
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("User Data:", user);
    axiosInstance
      .post("", user)
      .then(() => {
        console.log("User created successfully");
        alert("User created successfully"); // Add this line to show an alert when the user is created successfully
        navigate("/"); // Redirect to the home page after creating the user
      })
      .catch(() => {
        console.log("Error in creating user");
        alert("Error in creating user"); // Add this line to show an alert when there is an error in creating the user
      });
    // Add your form submission logic here (e.g., send the data to an API)
  };

  return (
    <>
      <h1>Update User</h1>

      <form onSubmit={handleSubmit} className="container mt-4">
        <div className="form-group mt-3">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
            className="form-control"
            placeholder="Enter Name"
          />
        </div>
        <div className="form-group mt-3">
          <label>Mobile:</label>
          <input
            type="tel"
            name="mobile"
            value={user.mobile}
            onChange={handleChange}
            required
            className="form-control"
            placeholder="Enter Mobile Number"
          />
        </div>
        <div className="form-group mt-3">
          <label>Loyalty Status:</label>
          <select
            name="isLoyalty"
            value={user.isLoyalty}
            onChange={handleChange}
            className="form-control"
          >
            <option value="Y">True</option>
            <option value="N">False</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>
      </form>
      <br />
    </>
  );
}

export default UpdateUser;
