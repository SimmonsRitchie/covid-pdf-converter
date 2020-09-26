import React from "react";
import PropTypes from "prop-types";

const Section = ({ children }) => {
  return (
    <section className="section">
      <div className="columns">
        <div className="column is-8 is-offset-2">{children}</div>
      </div>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
