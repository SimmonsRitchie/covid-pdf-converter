import React from "react";
import Section from "./Section";

const About = () => {
  return (
    <Section>
      <div className="content">
        <p className="block">
          As of Sept, 2020, seven months since Pennsylvania's first reported
          case of COVID-19, the Pa. Department of Health continues to make it
          difficult for journalists and researchers to easily access statistics
          it compiles daily on new cases, deaths, and negative tests.
        </p>
        <p className="block">
          The department uploads a PDF most days of the week with running totals
          of these statistics. Because of the nature of PDFs, it can be awkward
          to extract this data quickly and easily. This app is designed to make
          it easier for researchers and journalists to convert these PDFs to
          plain text.
        </p>
      </div>
    </Section>
  );
};

export default About;
