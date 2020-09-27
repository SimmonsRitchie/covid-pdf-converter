import React from "react";
import Section from "./Section";

const About = () => {
  return (
    <Section>
      <div className="content">
        <p>
          As of Sept, 2020, seven months since Pennsylvania's first reported
          case of COVID-19, the Pa. Department of Health continues to make it
          difficult for journalists and researchers to easily access statistics
          it compiles daily on new cases, deaths, and negative tests.
        </p>
        <p>
          The department uploads two PDF most days of the week with running
          totals of these statistics: one related to 'cases' and one related to
          'deaths'. Because of the nature of PDFs, it can be awkward to extract
          the data from these PDFs quickly and easily. This app is designed to
          make it easier for researchers and journalists to convert these PDFs
          to plain text.
        </p>
        <h2>FAQ</h2>
        <h3>Why not automate the retrieval of the urls?</h3>
        <p>
          At time of writing, the Pa. Department of Health does not seem to
          abide by a consistent convention for naming its PDFs. This is
          unfortunate because, if it was consistent, I could have designed this
          app to download PDFs based solely on user-provided dates.
        </p>
        <p>
          Similarly, due to frequent changes in the layout of the department's
          COVID-19 portal over the past seven months, I have been hesitant to
          add functionality that would simply scrape the URLs. I fear that this
          functionality would quietly break as the department makes more
          changes.
        </p>
        <p>
          For the time being, it seems safest to simply require users to enter
          the URLs manually.
        </p>
        <h3>How was this app built?</h3>
        <p>
          The backend for this app uses Python and Flask. PDFs are converted to
          text using tabula-py – a thin wrapper for tabula-java – and parsed
          using Pandas.
        </p>
        <p>The frontend was built with React using the Bulma CSS framework.</p>
        <p>
          View the source code{" "}
          <a
            href="https://github.com/SimmonsRitchie/covid-pdf-converter"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
      </div>
    </Section>
  );
};

export default About;
