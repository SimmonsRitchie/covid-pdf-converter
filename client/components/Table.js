/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";

const Table = ({ data }) => {
  const firstRow = data[Object.keys(data)[0]];
  return (
    <div className="table-container">
      <table className="table is-bordered">
        <thead>
          <tr>
            <td />
            <td>Data</td>
            {Object.keys(firstRow).map((key) => (
              <td key={key}>{key}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((key) => (
            <Row key={key} dataType={key} rowData={data[key]} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

const Row = ({ dataType, rowData }) => {
  copyToClipboard = () => {
    const dataArr = Object.keys(rowData).map((key) => rowData[key]);
    const dataStr = dataArr.join(", ");
    const dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = dataStr;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
  };

  return (
    <tr>
      <td>
        <button type="button" onClick={copyToClipboard}>
          COPY
        </button>
      </td>
      <td>{dataType}</td>
      {Object.keys(rowData).map((key) => (
        <td key={dataType + key}>{rowData[key]}</td>
      ))}
    </tr>
  );
};

Row.defaultProps = {
  dataType: "",
};

Row.propTypes = {
  dataType: PropTypes.string,
  rowData: PropTypes.objectOf(PropTypes.Any).isRequired,
};

export default Table;
