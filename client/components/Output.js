import React, { useState } from "react";
import PropTypes from "prop-types";
import Table from "./Table";
import Loader from "./Loader";
import Tabs from "./Tabs";

const Output = ({ loading, output, error }) => {
  const tabSchema = [
    { id: "table", label: "Table" },
    { id: "text", label: "Text" },
  ];
  const [currentTab, setCurrentTab] = useState("table");
  const handleTabClick = (val) => {
    setCurrentTab(val);
  };

  // TODO: Add enum so that display switches between table and text components

  return (
    <section className="section">
      <div className="columns">
        <div className="column is-8 is-offset-2">
          {loading && <Loader />}
          {error && (
            <div className="notification is-danger is-light">{error}</div>
          )}
          <Tabs
            tabSchema={tabSchema}
            currentTab={currentTab}
            handleTabClick={handleTabClick}
          />
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

// {output && <Table data={output} />}
