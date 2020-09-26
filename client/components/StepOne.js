import React from "react";
import NumberItem from "./NumberItem";

const DOH_URL =
  "https://www.health.pa.gov/topics/disease/coronavirus/Pages/Cases.aspx";

const StepOne = () => {
  const hi = (
    <React.Fragment>
      Go to{" "}
      <a href={DOH_URL} target="_blank" rel="noreferrer">
        this page
      </a>{" "}
      at the Pa. Department of Health and copy the URLs for &apos;County case
      counts by date&apos; and &apos;Death by county of residence&apos; pages.
    </React.Fragment>
  );

  return <NumberItem number={1} instructions={hi} />;
};

export default StepOne;
