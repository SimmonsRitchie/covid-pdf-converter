import React from "react";
import PropTypes from "prop-types";
import Section from "./Section";

const NumberItem = ({ number, children }) => {
  return (
    <Section>
      <article className="media">
        <figure className="media-left">
          <h1 className="title">{number}</h1>
        </figure>
        <div className="media-content">{children}</div>
      </article>
    </Section>
  );
};

NumberItem.propTypes = {
  number: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default NumberItem;
