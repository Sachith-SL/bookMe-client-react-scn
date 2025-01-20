import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="d-flex flex-column bg-light" style={{ height: '100vh', width:'100%' }}>
      <div className="p-3">
        <h5>Sidebar</h5>
        <ul className="nav flex-column">
          <li className="nav-item">
          <Link className="nav-link" to="/new">Create New User</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/read">Users</Link>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-dark">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-dark">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
