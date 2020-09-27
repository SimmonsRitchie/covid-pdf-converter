import React from "react";
import NumberItem from "./NumberItem";

const DOH_URL =
  "https://www.health.pa.gov/topics/disease/coronavirus/Pages/Cases.aspx";

const StepOne = () => {
  const hi = (
    <React.Fragment>
      <p>
        Click{" "}
        <a href={DOH_URL} target="_blank" rel="noreferrer">
          here
        </a>{" "}
        and copy the URLs to the following pages:
      </p>
      <ul>
        <li>County case counts by date</li>
        <li>Death by county of residence</li>
      </ul>
      <p>
        If you just want to see how this works, skip this step and click "demo"
        below.
      </p>
    </React.Fragment>
  );

  return <NumberItem number={1} instructions={hi} />;
};

export default StepOne;
