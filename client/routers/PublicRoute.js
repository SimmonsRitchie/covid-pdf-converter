/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Route } from "react-router-dom";
import Header from "../components/Header";
import { FOOTER_CREDIT, FOOTER_HELP, FOOTER_SOURCE } from "../utils/constants";
import Footer from "../components/Footer";

const PublicRoute = ({ component: Component, ...routeProps }) => {
  return (
    <Route {...routeProps}>
      <div>
        <Header
          title="COVID PDF Converter"
          subtitle="Convert PDFs with Pennsylvania COVID-19 info into plain text."
        />
        <Component />
        <Footer
          creditText={FOOTER_CREDIT}
          helpText={FOOTER_HELP}
          sourceLink={FOOTER_SOURCE}
        />
      </div>
    </Route>
  );
};

export default PublicRoute;
