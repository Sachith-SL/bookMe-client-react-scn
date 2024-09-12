import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const navigate = useNavigate();

  const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/api/users", // replace with your API base URL
  });

  const [user, setUser] = useState({
    name: "",
    mobile: "",
    isLoyalty: "N", // 'Y' or 'N'
    role: "CUSTOMER", // 'CUSTOMER' or 'ADMIN'
    password: "", //
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
  };

  return (
    <>
      <div className="d-flex justify-content-center  align-items-center">
        <form onSubmit={handleSubmit} className=" card opacity-75 bg-secondary shadow-lg p-4">
          <h1 className="text-center">Register</h1>
          <div className="form-group mt-3 px-4">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              required
              className="form-control "
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group mt-3 px-4">
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
          <div className="form-group mt-3 px-4">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="Enter Password"
            />
          </div>
          <div className="form-group mt-3 px-4">
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
          <button type="submit" className="btn btn-primary mt-4 w-100 px-4">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateUser;
