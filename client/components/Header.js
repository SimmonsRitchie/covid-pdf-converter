import React from "react";

const Header = () => {
  return (
    <section className="hero is-dark is-bold">
      <div className="hero-body">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <h1 className="title is-1 grey-dark">Covid PDF Converter</h1>
            <h2 className="subtitle colored is-4">
              Downloads PDFs on Pa. Department of Health website and converts
              them to text.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
