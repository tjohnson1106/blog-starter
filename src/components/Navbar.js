import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="container">
          <Link to="/" className="brand-logo">
            Blog Starter
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
