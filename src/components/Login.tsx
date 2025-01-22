import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosInstance, { getAuthtoken, setAuthtoken } from '../api/axios';

function Login() {
    const navigate = useNavigate();

  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    console.log("User Data:", user);

    axiosInstance
      .post("/login", user)
      .then((responce) => {
        console.log("logged in successfully");
        setAuthtoken(responce.data);
        console.log(getAuthtoken())
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
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="form-group mt-3">
        <label>Name:</label>
        <input
          type="text"
          name="userName"
          value={user.userName}
          onChange={handleChange}
          required
          className="form-control"
          placeholder="Enter user name"
        />
      </div>
      <div className="form-group mt-3">
        <label>Mobile:</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          required
          className="form-control"
          placeholder="Enter Mobile Number"
        />
      </div>
      <button type="submit" className="btn btn-primary mt-4">
        Login
      </button>
    </form>
  );
}

export default Login