import React, { useState } from "react";

function Login() {

    const [mobile, setMobile] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      console.log('Mobile:', mobile);
    };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
    <div className="card p-4 shadow-sm">
      <h1 className="text-center">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-3">
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
        <div className="form-group mt-3">
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
        <div className="mb-3 form-check mt-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  </div>
  );
}

export default Login;
