import React, { useState } from "react";
import PropTypes from "prop-types";

const Navbar = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const activeClass = burgerOpen ? "is-active" : "";
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item brand-text" href="../index.html">
            Bulma Admin
          </a>
          <div
            onClick={() => setBurgerOpen(!burgerOpen)}
            className={`navbar-burger burger ${activeClass}`}
            data-target="navMenu"
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenu" className={`navbar-menu ${activeClass}`}>
          <div className="navbar-start">
            <a className="navbar-item" href="admin.html">
              Home
            </a>
            <a className="navbar-item" href="admin.html">
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
