import React from "react";
import PropTypes from "prop-types";
import Section from "./Section";

const NumberItem = ({ number, instructions, children }) => {
  return (
    <Section>
      <article className="media">
        <figure className="media-left">
          <h1 className="title">{number}</h1>
        </figure>
        <div className="media-content">
          <div className="content">
            <p className="is-size-5">{instructions}</p>
          </div>
          {children}
        </div>
      </article>
    </Section>
  );
};

NumberItem.defaultProps = {
  children: null,
};

NumberItem.propTypes = {
  number: PropTypes.number.isRequired,
  instructions: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.elementType,
  ]).isRequired,
  children: PropTypes.node,
};

export default NumberItem;
