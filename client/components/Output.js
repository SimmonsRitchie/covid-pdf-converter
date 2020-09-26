import React, { useState } from "react";
import PropTypes from "prop-types";
import OutputTable from "./OutputTable";
import Loader from "./Loader";
import Tabs from "./Tabs";
import OutputText from "./OutputText";
import Section from "./Section";
import { TAB_SCHEMA } from "../utils/constants";
import copyToClipboard from "../utils/copyToClipboard";

const Output = ({ loading, output, error }) => {
  const [currentTab, setCurrentTab] = useState("table");
  const handleTabClick = (val) => {
    setCurrentTab(val);
  };
  let firstRow;
  let restOfRows;
  let firstRowStr;
  let restOfRowsArrOfStrs;
  if (output) {
    firstRow = output[Object.keys(output)[0]];
    firstRow = ["data", ...Object.keys(firstRow)];
    restOfRows = Object.keys(output).map((key) => {
      return [key, ...Object.values(output[key])];
    });
    firstRowStr = firstRow.join(",");
    restOfRowsArrOfStrs = restOfRows.map((row) => {
      return row.join(",");
    });
  }

  const copyAllText = () => {
    const fullText = `${firstRowStr}\n${restOfRowsArrOfStrs.join("\n")}`;
    copyToClipboard(fullText);
  };

  const OUTPUT_DISPLAY = {
    table: (
      <OutputTable
        firstRow={firstRow}
        restOfRows={restOfRows}
        copyAllText={copyAllText}
      />
    ),
    text: (
      <OutputText
        firstRowStr={firstRowStr}
        restOfRowsArrOfStrs={restOfRowsArrOfStrs}
        copyAllText={copyAllText}
      />
    ),
  };

  return (
    <Section>
      {loading && <Loader />}
      {error && <div className="notification is-danger is-light">{error}</div>}
      {output && (
        <div>
          <h3 className="title is-3 has-text-success has-text-centered	">
            <span role="img" aria-label="party">
              🎉
            </span>{" "}
            PDFs converted!{" "}
            <span role="img" aria-label="party">
              🎉
            </span>
          </h3>
          <Tabs
            tabSchema={TAB_SCHEMA}
            currentTab={currentTab}
            handleTabClick={handleTabClick}
          />
          {OUTPUT_DISPLAY[currentTab]}
        </div>
      )}
    </Section>
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
