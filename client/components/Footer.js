import React from "react";
import PropTypes from "prop-types";

const Footer = ({ creditText, helpText }) => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        {creditText && <p className="block">{creditText}</p>}
        {helpText && <p className="block">{helpText}</p>}
      </div>
    </footer>
  );
};

Footer.propTypes = {
  creditText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.elementType,
    PropTypes.node,
  ]).isRequired,
  helpText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.elementType,
    PropTypes.node,
  ]).isRequired,
};

export default Footer;
