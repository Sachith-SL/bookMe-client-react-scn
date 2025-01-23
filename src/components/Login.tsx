import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance, { getAuthtoken, setAuthtoken } from "../api/axios";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    console.log("User Data:", user);

    axiosInstance
      .post("/auth/login", user)
      .then((responce) => {
        console.log("logged in successfully");
        setAuthtoken(responce.data);
        console.log(getAuthtoken());
        alert("logged in successfully"); // Add this line to show an alert when the user is created successfully
        navigate("/"); // Redirect to the home page after creating the user
      })
      .catch(() => {
        console.log("Error in login");
        alert("Error in login"); // Add this line to show an alert when there is an error in creating the user
      });
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="d-flex justify-content-center ">
      <form onSubmit={handleSubmit} className="mt-4 border rounded border-1 p-4">
      <h3 className="text-center text-primary">Login</h3>
        <div className="form-group mt-3">
          <label className="form-label">E Mail:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
            className="form-control"
            placeholder="Enter user name"
          />
        </div>
        <div className="form-group mt-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
            className="form-control"
            placeholder="Enter valid password"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3  w-100">
          Login
        </button>
      </form>
      </div>
    </>
  );
}

export default Login;
