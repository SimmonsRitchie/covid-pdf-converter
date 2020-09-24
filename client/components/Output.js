import React from "react";
import Spinner from "react-spinkit";
import PropTypes from "prop-types";
import Table from "./Table";

const Output = ({ loading, output, error }) => {
  return (
    <section className="section">
      <div className="columns">
        <div className="column is-8 is-offset-2">
          {loading && (
            <div className="level">
              <div className="level-item">
                <Spinner name="ball-scale-ripple" color="#ED3B5F" />
              </div>
            </div>
          )}
          {error && (
            <div className="notification is-danger is-light">{error}</div>
          )}
          {output && <Table data={output} />}
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
