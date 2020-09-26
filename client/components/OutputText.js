import React from "react";
import PropTypes from "prop-types";

const OutputText = ({ firstRowStr, restOfRowsArrOfStrs, copyAllText }) => {
  const firstRowJsx = <p>{firstRowStr}</p>;

  return (
    <div>
      <div className="level">
        <div className="level-left">
          <div className="level-item">
            <button
              type="button"
              className="button is-small"
              onClick={copyAllText}
            >
              COPY ALL
            </button>
          </div>
        </div>
        <div className="level-right" />
      </div>
      <div style={{ width: "100%", overflow: "auto" }}>
        <pre>
          {firstRowJsx}
          {restOfRowsArrOfStrs.map((row) => (
            <p key={row.slice(0, 20)}>{row}</p>
          ))}
        </pre>
      </div>
    </div>
  );
};

OutputText.defaultProps = {
  firstRowStr: null,
  restOfRowsArrOfStrs: null,
};

OutputText.propTypes = {
  firstRowStr: PropTypes.string,
  restOfRowsArrOfStrs: PropTypes.arrayOf(PropTypes.string),
  copyAllText: PropTypes.func.isRequired,
};
export default OutputText;
