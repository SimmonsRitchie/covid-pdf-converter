/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import PropTypes from "prop-types";
import NumberItem from "./NumberItem";
import { SAMPLE_CASES_URL, SAMPLE_DEATHS_URL } from "../utils/constants";

const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

const StepTwo = ({ scrapePDF, clearOutput }) => {
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
    setAndValidateCasesUrl(SAMPLE_CASES_URL);
    setAndValidateDeathsUrl(SAMPLE_DEATHS_URL);
  };

  const submitUrls = () => {
    if (!casesValid || !deathsValid) {
      setErrorMsg("Please enter valid URLs");
    } else if (casesURL === deathsURL) {
      setErrorMsg(
        "Cases and deaths URLs are the same. Did you accidentally copy the same URL twice?"
      );
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
    <NumberItem number={2} instructions="Enter URLs">
      <div className="level is-mobile">
        <div className="level-left" />
        <div className="level-right">
          <div className="level-item">
            <div className="buttons">
              <button
                type="button"
                onClick={setDemoData}
                className="button is-small is-primary"
              >
                <span>Demo</span>
                <span className="icon is-small">
                  <i className="fas fa-play-circle" />
                </span>
              </button>
              <button
                type="button"
                onClick={clearAllData}
                className="button is-small is-danger"
              >
                <span>Clear</span>
                <span className="icon is-small">
                  <i className="fas fa-times" />
                </span>
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
    </NumberItem>
  );
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

export default StepTwo;
