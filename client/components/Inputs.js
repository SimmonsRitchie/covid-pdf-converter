/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import PropTypes from "prop-types";

const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

const Inputs = ({ scrapePDF, clearOutput }) => {
  const [casesURL, setCasesURL] = useState("");
  const [casesValid, setCasesValid] = useState(false);
  const [deathsURL, setDeathsURL] = useState("");
  const [deathsValid, setDeathsValid] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const setAndValidateCasesUrl = (value) => {
    setErrorMsg("");
    if (URL_REGEX.test(value)) {
      setCasesValid(true);
    } else {
      setCasesValid(false);
    }
    setCasesURL(value);
  };

  const setAndValidateDeathsUrl = (value) => {
    setErrorMsg("");
    if (URL_REGEX.test(value)) {
      setDeathsValid(true);
    } else {
      setDeathsValid(false);
    }
    setDeathsURL(value);
  };

  const setDemoData = () => {
    setAndValidateCasesUrl(
      "https://www.health.pa.gov/topics/Documents/Diseases%20and%20Conditions/COVID-19%20County%20Data/County%20Case%20Counts_9_19_2020.pdf"
    );
    setAndValidateDeathsUrl(
      "https://www.health.pa.gov/topics/Documents/Diseases%20and%20Conditions/COVID-19%20Death%20Data/County%20Death%20Counts_9_19_2020.pdf"
    );
  };

  const submitUrls = () => {
    if (!casesValid || !deathsValid) {
      setErrorMsg("Please enter valid URLS");
    } else {
      setErrorMsg("");
      scrapePDF(casesURL, deathsURL);
    }
  };

  const clearAllData = () => {
    setAndValidateCasesUrl("");
    setAndValidateDeathsUrl("");
    clearOutput();
  };

  return (
    <section className="section">
      <div className="columns">
        <div className="column is-8 is-offset-2">
          <div className="level is-mobile">
            <div className="level-left">
              <div className="left-item">
                <h2 className="title is-6">URLs</h2>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <div className="buttons">
                  <button
                    type="button"
                    onClick={setDemoData}
                    className="button is-small is-danger"
                  >
                    Demo
                  </button>
                  <button
                    type="button"
                    onClick={clearAllData}
                    className="button is-small is-primary"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </div>
          <InputURL
            value={casesURL}
            setValue={setAndValidateCasesUrl}
            validValue={casesValid}
            placeholder="Cases"
          />
          <InputURL
            value={deathsURL}
            setValue={setAndValidateDeathsUrl}
            validValue={deathsValid}
            placeholder="Deaths"
          />
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <button
                  type="button"
                  className="button is-info"
                  onClick={submitUrls}
                >
                  Scrape
                </button>
              </div>
            </div>
          </div>

          {errorMsg && (
            <div className="notification is-danger is-light">{errorMsg}</div>
          )}
        </div>
      </div>
    </section>
  );
};

Inputs.propTypes = {
  scrapePDF: PropTypes.func.isRequired,
  clearOutput: PropTypes.func.isRequired,
};

const InputURL = ({ value, setValue, placeholder, validValue }) => {
  const checkStyle = validValue ? { color: "green" } : { color: "" };
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
          <i className="fas fa-check fa-xs" style={checkStyle} />
        </span>
      </div>
    </div>
  );
};

InputURL.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  validValue: PropTypes.bool.isRequired,
};

export default Inputs;
