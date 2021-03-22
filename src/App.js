import React from "react";
//importing the pages
import { Router, Route } from "react-router-dom";
import Routes from "./Routes/Routes";
import { history } from "./helpers";
import "./App.css";

export default function App(props) {
  return (
    <div className="App">
      <Router history={history}>
        <Route>{Routes}</Route>
      </Router>
    </div>
  );
}
