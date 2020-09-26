/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar";

const Header = ({ title, subtitle }) => {
  return (
    <section className="hero is-dark is-bold">
      <div className="hero-head">
        <Navbar />
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

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Header;
