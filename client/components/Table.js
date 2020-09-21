/* eslint-disable react/no-array-index-key */
import React from "react";

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
              <td>{key}</td>
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

const Row = ({ dataType, rowData }) => {
  function copyToClipboard(text) {
    const dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = JSON.stringify(rowData);
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
  }

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

export default Table;
