import React, { useState } from "react";
import Inputs from "./Inputs";
import Header from "./Header";
import Output from "./Output";
import Footer from "./Footer";

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
      <Header
        title="COVID PDF Converter"
        subtitle="Convert PDFs from DoH to Text"
      />
      <Inputs scrapePDF={scrapePDF} clearOutput={clearOutput} />
      <Output loading={loading} output={output} error={error} />
      <Footer text="Created by Daniel Simmons-Ritchie, Spotlight PA." />
    </div>
  );
};

export default Main;
