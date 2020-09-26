import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import Main from "../components/Main";
import About from "../components/About";
import NotFoundPage from "../components/NotFoundPage";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/" exact component={Main} />
        <PublicRoute path="/about" exact component={About} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
