import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/api/users", // replace with your API base URL
  });
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Mobile:", mobile);
    axiosInstance
      .get(`/login/${mobile}`)
      .then((response) => {
        setIsAvailable(response.data === "true" ? true : false);
        console.log("User Data:", response.data);
        alert(isAvailable ? "Login Successful" : "Login Failed"); // Add this line to show an alert when the login is successful
      })
      .catch(() => {
        console.log("Error in creating user");
        alert("Error in creating user"); // Add this line to show an alert when there is an error in creating the user
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-4">
      <div className="card p-5 shadow-lg opacity-75 bg-secondary text-white p-4">
        <h1 className="text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group ">
            <label>Mobile:</label>
            <input
              type="tel"
              name="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
              className="form-control"
              placeholder="Enter Mobile Number"
            />
          </div>
          <div className="form-group mt-2">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-control"
              placeholder="Enter Password"
            />
          </div>
          <div className="mb-4 form-check mt-2">
            <input
              type="checkbox"
              className="form-check-input bg-success"
              id="exampleCheck1"
            />
            <label
              className="form-check-label fw-lighter fs-6"
              htmlFor="exampleCheck1"
            >
              Remember me
            </label>
            <p className="float-end text-sm fw-lighter fs-sm">
              {" "}
              Forgot Password?
            </p>
          </div>
          <button type="submit" className="btn btn-success w-100">
            Submit
          </button>
          <p className="fw-lighter p-2">
            Don't have an accoount ?{" "}
            <span className="fw-bold">
              <Link className="text-info" to={"/new"}>
                Register
              </Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
