import React, { useState } from "react";

const Navbar = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const activeClass = burgerOpen ? "is-active" : "";
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item brand-text" href="../index.html">
            <span className="icon">
              <i className="far fa-file-pdf" />
            </span>
            <span>CPC</span>
          </a>
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
