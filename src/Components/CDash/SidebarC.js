import React from "react";
import { Link } from "react-router-dom";

const SidebarC = ({ location }) => {
  return (
    <div className="sidebar" data-color="purple" data-background-color="white">
      <div className="logo">
        <span className="simple-text logo-normal">Ready Hands</span>
      </div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          <li
            className={`nav-item ${
              location.pathname === "/client/dashboard" && "active"
            }`}
          >
            <Link className="nav-link" to="/client/dashboard">
              <i className="material-icons">dashboard</i>
              <p>Dashboard</p>
            </Link>
          </li>
          <li
            className={`nav-item ${
              location.pathname === "/client/dashboard/profile" && "active"
            }`}
          >
            <Link className="nav-link" to="/client/dashboard/profile">
              <i className="material-icons">person</i>
              <p>Profile</p>
            </Link>
          </li>

          <li
            className={`nav-item ${
              location.pathname === "/client/dashboard/jobs/list" && "active"
            }`}
          >
            <Link className="nav-link" to="/client/dashboard/jobs/list">
              <i className="material-icons">content_paste</i>
              <p>Jobs List</p>
            </Link>
          </li>

          <li
            className={`nav-item ${
              location.pathname === "/client/dashboard/table" && "active"
            }`}
          >
            <Link className="nav-link" to="/client/dashboard/table">
              <i className="material-icons">table_chart</i>
              <p>Table</p>
            </Link>
          </li>
          <li
            className={`nav-item ${
              location.pathname === "/client/dashboard/create/job" && "active"
            }`}
          >
            <Link className="nav-link" to="/client/dashboard/create/job">
              <i className="material-icons">post_add</i>
              <p>Create A Job</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarC;
