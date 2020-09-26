import React from "react";
import NumberItem from "./NumberItem";

const DOH_URL =
  "https://www.health.pa.gov/topics/disease/coronavirus/Pages/Cases.aspx";

const StepOne = () => {
  return (
    <NumberItem number={1}>
      <div className="content">
        <p>
          Go to{" "}
          <a href={DOH_URL} target="_blank">
            this page
          </a>{" "}
          at the Pa. Department of Health and copy the URLs for &apos;County
          case counts by date&apos; and &apos;Death by county of residence&apos;
          pages.
        </p>
      </div>
    </NumberItem>
  );
};

export default StepOne;
