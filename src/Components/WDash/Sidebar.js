import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ location, user }) => {
  return (
    <div className="sidebar" data-color="purple" data-background-color="white">
      <div className="logo">
        <span className="simple-text logo-normal">{user}</span>
      </div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          <li
            className={`nav-item ${
              location.pathname === "/worker/dashboard" && "active"
            }`}
          >
            <Link className="nav-link" to="/worker/dashboard">
              <i className="material-icons">dashboard</i>
              <p>Dashboard</p>
            </Link>
          </li>
          <li
            className={`nav-item ${
              location.pathname === "/worker/dashboard/profile" && "active"
            }`}
          >
            <Link className="nav-link" to="/worker/dashboard/profile">
              <i className="material-icons">person</i>
              <p>Profile</p>
            </Link>
          </li>

          <li
            className={`nav-item ${
              location.pathname === "/worker/dashboard/jobs/list" && "active"
            }`}
          >
            <Link className="nav-link" to="/worker/dashboard/jobs/list">
              <i className="material-icons">content_paste</i>
              <p>Jobs List</p>
            </Link>
          </li>

          <li
            className={`nav-item ${
              location.pathname === "/worker/dashboard/jobs/map" && "active"
            }`}
          >
            <Link className="nav-link" to="/worker/dashboard/jobs/map">
              <i className="material-icons">location_ons</i>
              <p>Jobs Map</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
