import React from "react";
import { Link } from "react-router-dom";
import "../css/normalize.css";
import "../css/NavBar.css";
import logo from "../images/logo.png";
export const Navbar = () => {
  return (
    <div>
      <div className="navBar-container">
        <nav className="navBar">
          <ul>
            <li className="logo">
              <Link to="/" className="text-link">
                <img className="logo-image" src={logo} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/WOD" className="text-link">
                Workouts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
