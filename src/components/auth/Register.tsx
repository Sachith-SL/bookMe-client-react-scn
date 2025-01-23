import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthtoken } from "../../api/UserService";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    city: "",
    role: "",
  });

  const handleRegister = async (user: any, token: any) => {
    try {
      alert("User created successfully"); // Add this line to show an alert when the user is created successfully
      navigate("/"); // Redirect to the home page after creating the user
    } catch (error) {
      console.log("Error in creating user");
      alert("Error in creating user");
    }
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    handleRegister(user, getAuthtoken);
    console.log("User Data:", user);
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
      <div className="d-flex justify-content-center">
        <form
          onSubmit={handleSubmit}
          className="border rounded border-1 p-4 mt-1"
        >
          <h3 className="text-center text-primary">Register </h3>
          <div className="form-group">
            <label className="form-label">Name:</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label className="form-label">E mail:</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
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
          <div className="form-group">
            <label className="form-label">City:</label>
            <input
              type="text"
              name="city"
              value={user.city}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="Enter your city"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Role:</label>
            <input
              type="text"
              name="role"
              value={user.role}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="Enter the role (ex: USER)"
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3  w-100">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
