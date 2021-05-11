import React from "react";
import { FaBirthdayCake } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo-title">
          <i className="navbar-logo">
            <FaBirthdayCake />
          </i>

          <h2>Design Daily</h2>
        </div>
        
        <div className="container-menu">
          <ul className="menu">
            <li>About</li>
            <li>Design</li>
            <li>Lience</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
