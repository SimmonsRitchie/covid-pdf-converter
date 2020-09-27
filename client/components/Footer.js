import React from "react";
import PropTypes from "prop-types";

const Footer = ({ creditText, helpText, sourceLink }) => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        {creditText && <p className="block">{creditText}</p>}
        {helpText && <p className="block">{helpText}</p>}
        {sourceLink && (
          <a
            className="button"
            href="https://github.com/SimmonsRitchie/covid-pdf-converter"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </a>
        )}
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  sourceLink: null,
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
  sourceLink: PropTypes.string,
};

export default Footer;
