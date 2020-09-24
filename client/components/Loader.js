import React from "react";

const Loader = () => {
  return (
    <div className="level">
      <div className="level-item">
        <progress className="progress is-danger" max="100">
          30%
        </progress>
      </div>
    </div>
  );
};

export default Loader;
