import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <section className="hero is-dark is-bold">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="../">
                <img
                  src="http://bulma.io/images/bulma-type-white.png"
                  alt="Logo"
                />
              </a>
              <span className="navbar-burger burger" data-target="navbarMenu">
                <span />
                <span />
                <span />
              </span>
            </div>
            <div id="navbarMenu" className="navbar-menu">
              <div className="navbar-end">
                <div className="tabs is-right">
                  <ul>
                    <li className="is-active">
                      <a>Home</a>
                    </li>
                    <li>
                      <a href="">About</a>
                    </li>
                  </ul>
                  <span className="navbar-item">
                    <a
                      className="button is-white is-outlined"
                      href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/hero.html"
                    >
                      <span className="icon">
                        <i className="fa fa-github" />
                      </span>
                      <span title="Hello from the other side">View Source</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="hero-body">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <h1 className="title is-1 grey-dark">{title}</h1>
            <h2 className="subtitle colored is-4">{subtitle}</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
