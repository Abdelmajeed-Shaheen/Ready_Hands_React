import React from "react";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark "
      style={{ backgroundColor: "#00695c" }}
    >
      <a className="navbar-brand" href="#">
        Logo
      </a>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              About Us
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
