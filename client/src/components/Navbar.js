import React from "react";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg google-nav">
      <a className="navbar-brand nav-text" href="/">
        Google Books
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link nav-text" href="/">
              Search
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-text" href="/saved">
              Saved
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
