import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const activeClass = burgerOpen ? "is-active" : "";
  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <span className="icon">
              <i className="far fa-file-pdf" />
            </span>
            <span>CPC</span>
          </Link>
          <a
            onClick={() => setBurgerOpen(!burgerOpen)}
            className={`navbar-burger burger ${activeClass}`}
            data-target="navMenu"
            role="button"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div id="navMenu" className={`navbar-menu ${activeClass}`}>
          <div className="navbar-start">
            <NavLink
              exact
              to="/"
              className="navbar-item"
              activeClassName="is-active"
            >
              Home
            </NavLink>
            <NavLink
              exact
              to="/about"
              className="navbar-item"
              activeClassName="is-active"
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
