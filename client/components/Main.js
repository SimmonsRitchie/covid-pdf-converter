import React, { useState } from "react";
import StepTwo from "./StepTwo";
import StepOne from "./StepOne";
import Header from "./Header";
import Output from "./Output";
import Footer from "./Footer";
import { CREDIT_LINE, HELP_TEXT } from "../utils/constants";

const Main = () => {
  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const scrapePDF = (casesURL, deathsURL) => {
    setError("");
    setLoading(true);
    setOutput(null);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ casesURL, deathsURL }),
    };
    fetch("/scrape", requestOptions)
      .then((res) => {
        if (res.status !== 200) {
          console.log(
            `Looks like there was a problem. Status Code: ${res.status}`
          );
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setLoading(false);
        setOutput(data.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        setError("Uh oh, something went wrong! Did you use a bad URL?");
      });
  };

  const clearOutput = () => {
    setOutput(null);
    setError("");
  };

  return (
    <div>
      <StepOne />
      <StepTwo scrapePDF={scrapePDF} clearOutput={clearOutput} />
      <Output loading={loading} output={output} error={error} />
    </div>
  );
};

export default Main;
