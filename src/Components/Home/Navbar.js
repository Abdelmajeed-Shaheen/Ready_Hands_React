import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark sticky-top"
      style={{ backgroundColor: "#00695c" }}
    >
      <Link className="navbar-brand" to="/home">
        <span style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>
          Ready Hands
        </span>
      </Link>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="navbar-brand" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="navbar-brand" to="/home">
              About Us
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="navbar-brand" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
