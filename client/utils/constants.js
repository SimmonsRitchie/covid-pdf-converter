import React from "react";

export const SAMPLE_CASES_URL =
  "https://interactives.data.spotlightpa.org/assets/covid-pdf-converter/sample/sample__county-cases__2020-09-22.pdf";
export const SAMPLE_DEATHS_URL =
  "https://interactives.data.spotlightpa.org/assets/covid-pdf-converter/sample/sample__county-deaths__2020-09-22.pdf";
export const TAB_SCHEMA = [
  { id: "table", label: "Table", faIcon: "fas fa-table" },
  { id: "text", label: "Text", faIcon: "fas fa-align-justify" },
];
export const CREDIT_LINE = (
  <React.Fragment>
    Created by Daniel Simmons-Ritchie,{" "}
    <a
      href="https://www.spotlightpa.org"
      target="_blank"
      rel="noreferrer noopener"
    >
      Spotlight PA
    </a>
    .
  </React.Fragment>
);
export const HELP_TEXT = (
  <React.Fragment>
    Problems? Email{" "}
    <a href="mailto:dsimmons.ritchie@spotlightpa.org">
      dsimmons-ritchie@spotlightpa.org
    </a>
    .
  </React.Fragment>
);
