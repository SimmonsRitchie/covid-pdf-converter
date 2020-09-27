import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const activeClass = burgerOpen ? "is-active" : "";
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item brand-text" href="../index.html">
            <span className="icon">
              <i className="far fa-file-pdf" />
            </span>
            <span>CPC</span>
          </Link>
          <div
            onClick={() => setBurgerOpen(!burgerOpen)}
            className={`navbar-burger burger ${activeClass}`}
            data-target="navMenu"
            role="button"
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenu" className={`navbar-menu ${activeClass}`}>
          <div className="navbar-start">
            <NavLink to="/" className="navbar-item" activeClassName="is-active">
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="navbar-item"
              activeClassName="active"
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
