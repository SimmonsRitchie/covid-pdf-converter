/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";
import copyToClipboard from "../utils/copyToClipboard";

const OutputTable = ({ firstRow, restOfRows }) => {
  return (
    <div className="table-container">
      <table className="table is-bordered">
        <thead>
          <tr>
            <td />
            {firstRow.map((value, idx) => (
              <td key={`${idx}-${value}`}>{value}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {restOfRows.map((value, idx) => {
            const colName = firstRow[idx];
            return (
              <Row
                key={`${colName}-${idx}`}
                colNames={firstRow}
                rowData={value}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

OutputTable.defaultProps = {
  firstRow: null,
  restOfRows: null,
};

OutputTable.propTypes = {
  firstRow: PropTypes.arrayOf(PropTypes.string),
  restOfRows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.any)),
};

const Row = ({ colNames, rowData }) => {
  const dataType = rowData[0];
  return (
    <tr>
      <td>
        <button
          type="button"
          className="button is-small"
          onClick={() => {
            const dataArr = Object.keys(rowData).map((key) => rowData[key]);
            const dataStr = dataArr.join(", ");
            copyToClipboard(dataStr);
          }}
        >
          COPY
        </button>
      </td>
      {rowData.map((value, idx) => {
        const colName = colNames[idx];
        return <td key={dataType + colName + idx}>{value}</td>;
      })}
    </tr>
  );
};

Row.propTypes = {
  colNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  rowData: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
};

export default OutputTable;
