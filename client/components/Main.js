import React, { useState } from "react";
import Inputs from "./Inputs";
import Table from "./Table";
import Header from "./Header";

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

  const clearOutput = () => {
    setOutput("");
  };

  return (
    <div>
      <Header />
      <Inputs scrapePDF={scrapePDF} clearOutput={clearOutput} />
      <section className="section">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            {loading && <div>Loading...</div>}
            {output && <Table data={output} />}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
