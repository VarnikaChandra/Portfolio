import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav className="navbar">
      <h1 className="logo">Varnika Chandra</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/projects">Projects</Link>

      </div>
    </nav>
  );
}

export default Header;