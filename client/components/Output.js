import React, { useState } from "react";
import PropTypes from "prop-types";
import OutputTable from "./OutputTable";
import Loader from "./Loader";
import Tabs from "./Tabs";
import OutputText from "./OutputText";

const Output = ({ loading, output, error }) => {
  const tabSchema = [
    { id: "table", label: "Table" },
    { id: "text", label: "Text" },
  ];
  const [currentTab, setCurrentTab] = useState("text");
  const handleTabClick = (val) => {
    setCurrentTab(val);
  };
  let firstRow;
  let restOfRows;
  if (output) {
    firstRow = output[Object.keys(output)[0]];
    firstRow = ["data", ...Object.keys(firstRow)];
    restOfRows = Object.keys(output).map((key) => {
      return [key, ...Object.values(output[key])];
    });
  }

  const displayEnum = {
    table: <OutputTable firstRow={firstRow} restOfRows={restOfRows} />,
    text: <OutputText firstRow={firstRow} restOfRows={restOfRows} />,
  };

  return (
    <section className="section">
      <div className="columns">
        <div className="column is-8 is-offset-2">
          {loading && <Loader />}
          {error && (
            <div className="notification is-danger is-light">{error}</div>
          )}
          {output && (
            <div>
              <Tabs
                tabSchema={tabSchema}
                currentTab={currentTab}
                handleTabClick={handleTabClick}
              />
              {displayEnum[currentTab]}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

Output.defaultProps = {
  output: null,
  error: "",
};

Output.propTypes = {
  loading: PropTypes.bool.isRequired,
  output: PropTypes.objectOf(PropTypes.any),
  error: PropTypes.string,
};

export default Output;

//
