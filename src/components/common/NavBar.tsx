import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import {
  getAuthtoken,
  isAdmin,
  isAuthenticated,
  logout,
} from "../../api/UserService";
import { useEffect, useState } from "react";

function NavBar() {
  const checkAuthenticated = isAuthenticated();
  const checkAdmin = isAdmin();

  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout this user?"
    );
    if (confirmLogout) {
      logout();
      navigate("/login");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <Link className="navbar-brand" to="">
            Home
          </Link>
          <NavLink className="nav-link" to="/users">{checkAdmin && "User Management"}</NavLink>
        </ul>
        <ul className="navbar-nav">
          <NavLink className="nav-link" to="/register">
            {!checkAuthenticated && "Register"}
          </NavLink>
          <NavLink className="nav-link " to="/login">
            {!checkAuthenticated && "Login"}
          </NavLink>
          <p className="nav-link" onClick={handleLogout}>
            {checkAuthenticated && "Logout"}
          </p>
          <p className="nav-link">{checkAuthenticated && "Profile"}</p>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
