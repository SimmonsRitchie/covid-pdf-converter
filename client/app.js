/* eslint-disable no-console */
/* eslint-disable no-undef */
import "./styles/styles.scss";

import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";
import AppRouter from "./routers/AppRouter";

// RENDERAPP
ReactDOM.render(<AppRouter />, document.getElementById("app"));
