/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Route } from "react-router-dom";
import Header from "../components/Header";
import { CREDIT_LINE, HELP_TEXT } from "../utils/constants";
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
        <Footer creditText={CREDIT_LINE} helpText={HELP_TEXT} />
      </div>
    </Route>
  );
};

export default PublicRoute;
