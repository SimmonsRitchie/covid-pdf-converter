/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import PropTypes from "prop-types";

const Post = ({ scrapePDF }) => {
  const fiona =
    "https://www.health.pa.gov/topics/Documents/Diseases%20and%20Conditions/COVID-19%20County%20Data/County%20Case%20Counts_9_19_2020.pdf";
  const apple =
    "https://www.health.pa.gov/topics/Documents/Diseases%20and%20Conditions/COVID-19%20Death%20Data/County%20Death%20Counts_9_19_2020.pdf";
  const [casesURL, setCasesURL] = useState(fiona);
  const [deathsURL, setDeathsURL] = useState(apple);

  return (
    <article>
      <h2 className="title is-6">URLs:</h2>
      <InputURL value={casesURL} setValue={setCasesURL} placeholder="Cases" />
      <InputURL
        value={deathsURL}
        setValue={setDeathsURL}
        placeholder="Deaths"
      />

      <button
        type="button"
        className="button is-info"
        onClick={() => scrapePDF(casesURL, deathsURL)}
      >
        Scrape
      </button>
    </article>
  );
};

const InputURL = ({ value, setValue, placeholder }) => {
  return (
    <div className="field">
      <div className="control has-icons-left has-icons-right">
        <input
          className="input"
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <span className="icon is-small is-left">
          <i className="fas fa-window-maximize fa-xs" />
        </span>
        <span className="icon is-small is-right">
          <i className="fas fa-check fa-xs" />
        </span>
      </div>
    </div>
  );
};

InputURL.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Post;
