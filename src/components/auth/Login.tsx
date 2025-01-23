import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, setAuthtoken, setRole } from "../../api/UserService";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const data = await login(user.email, user.password);
      if (data.token) {
        setAuthtoken(data.token);
        setRole(data.role);
        alert("logged in successfully");
        navigate("/");
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.error("login error", error);
      alert("Error in login");
    }
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    handleLogin();
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
        <form
          onSubmit={handleSubmit}
          className="mt-4 border rounded border-1 p-4"
        >
          <h3 className="text-center text-primary">Login</h3>
          {error && <p className="alert alert-danger"><strong>Error: </strong>{error}. Please try again!</p>}
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
