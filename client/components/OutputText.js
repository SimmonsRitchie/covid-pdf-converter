import React from "react";
import PropTypes from "prop-types";
import copyToClipboard from "../utils/copyToClipboard";

const OutputText = ({ firstRow, restOfRows }) => {
  const firstRowStr = firstRow.join(",");
  const firstRowJsx = <p>{firstRowStr}</p>;
  const restOfRowsArrOfStrs = restOfRows.map((row) => {
    return row.join(",");
  });

  const test = () => {
    const fullText = `${firstRowStr}\n${restOfRowsArrOfStrs.join("\n")}`;
    copyToClipboard(fullText);
  };

  return (
    <div>
      <button type="button" className="button" onClick={test}>
        Copy all
      </button>
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
  firstRow: null,
  restOfRows: null,
};

OutputText.propTypes = {
  firstRow: PropTypes.arrayOf(PropTypes.string),
  restOfRows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.any)),
};
export default OutputText;
