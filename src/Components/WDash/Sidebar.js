import React from "react";
import img from "../../assets/images/sidebar-1.jpg";
import { Link } from "react-router-dom";

const Sidebar = ({ location }) => {
  return (
    <div
      className="sidebar"
      data-color="purple"
      data-background-color="white"
      data-image={img}
    >
      <div className="logo">
        <a className="simple-text logo-normal">Ready Hands</a>
      </div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          <li
            className={`nav-item ${
              location.pathname === "/dashboard" && "active"
            }`}
          >
            <Link className="nav-link" to="/dashboard">
              <i className="material-icons">dashboard</i>
              <p>Dashboard</p>
            </Link>
          </li>
          <li
            className={`nav-item ${
              location.pathname === "/dashboard/profile" && "active"
            }`}
          >
            <Link className="nav-link" to="/dashboard/profile">
              <i className="material-icons">person</i>
              <p>Profile</p>
            </Link>
          </li>

          <li
            className={`nav-item ${
              location.pathname === "/dashboard/jobs/list" && "active"
            }`}
          >
            <Link className="nav-link" to="/dashboard/jobs/list">
              <i className="material-icons">content_paste</i>
              <p>Jobs List</p>
            </Link>
          </li>

          <li
            className={`nav-item ${
              location.pathname === "/dashboard/jobs/map" && "active"
            }`}
          >
            <Link className="nav-link" to="/dashboard/jobs/map">
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
