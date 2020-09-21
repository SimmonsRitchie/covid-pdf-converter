import React, { useState } from "react";
import Inputs from "./Inputs";
import Table from "./Table";

const Main = () => {
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const scrapePDF = (casesURL, deathsURL) => {
    setLoading(true);
    setOutput("");
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ casesURL, deathsURL }),
    };
    fetch("/scrape", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        console.log(data);
        setOutput(data.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log("Something went wrong!");
        console.log(err);
      });
  };

  return (
    <section className="container">
      <div className="columns is-multiline">
        <div className="column is-8 is-offset-2">
          <h1 className="title is-1">Covid PDF Converter</h1>
          <h2 className="subtitle colored is-4">
            Downloads PDFs on Pa. Department of Health website and converts them
            to text.
          </h2>
        </div>
        <div className="column is-8 is-offset-2">
          <Inputs scrapePDF={scrapePDF} />
        </div>
        <div className="column is-8 is-offset-2">
          {loading && <div>Loading...</div>}
          {output && <Table data={output} />}
        </div>
      </div>
    </section>
  );
};

export default Main;
