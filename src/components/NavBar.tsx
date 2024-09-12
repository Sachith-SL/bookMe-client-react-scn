import {
  faClipboardList,
  faHome,
  faBell,
  faUser,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import logoImage from "../assets/logo_v06.png";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        {/* Left-aligned links */}
        <div className="navbar-nav me-auto">
          <Link className="navbar-brand" to="">
            {/* <FontAwesomeIcon
              icon={faHomeAlt}
              style={{ color: "white" }}
              size="2x"
            /> */}
            <img style={{ width: '120px', height: '50px' }} className="card border-dark" src={logoImage}/>
          </Link>
          <Link className="nav-link mt-1 rounded-circle border-info" to="/my-reservations">
            <FontAwesomeIcon
              icon={faBell}
              style={{ color: "green" }}
              size="2x"
            />
          </Link>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
          </span>
          99+
          <span className="visually-hidden">unread messages</span>
        </div>

        {/* Right-aligned links */}
        <div className="navbar-nav ms-auto">
          <a className="nav-link" href="#">
            <Link className="nav-link" to="/new">
              <FontAwesomeIcon
                icon={faUserPlus}
                style={{ color: "blue" }}
                size="2x"
              />
            </Link>
          </a>
          <a className="nav-link" href="#">
            <Link className="nav-link" to="/login">
              <FontAwesomeIcon
                icon={faUser}
                style={{ color: "red" }}
                size="2x"
              />
            </Link>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
