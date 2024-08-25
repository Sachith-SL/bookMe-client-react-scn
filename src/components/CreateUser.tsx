import React, { useState } from "react";
import { Link } from "react-router-dom";

function CreateUser() {
  const [user, setUser] = useState({
    id: "",
    name: "",
    mobile: "",
    isLoyalty: "false", // default to 'false'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", user);
    // Add your form submission logic here (e.g., send the data to an API)
  };

  return (
    <>
      <h1>Create User</h1>

      <form onSubmit={handleSubmit} className="container mt-4">
        <div className="form-group">
          <label>ID:</label>
          <input
            type="number"
            name="id"
            value={user.id}
            onChange={handleChange}
            required
            className="form-control"
            placeholder="Enter ID"
          />
        </div>
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
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          <Link className="btn btn-primary" to="/">
            Submit
          </Link>
        </button>
      </form>
    </>
  );
}

export default CreateUser;
