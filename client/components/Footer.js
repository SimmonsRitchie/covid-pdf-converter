import React from "react";
import PropTypes from "prop-types";

const Footer = ({ text }) => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>{text}</p>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Footer;
