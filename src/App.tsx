import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.scss";

import AdminComponent from "./components/Admin";
import FormComponent from "./components/Form";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/">
              <div className="my-auto">
                <h1 className="logoFont">Open Forms</h1>
                <Link
                  className="mt-5 btn btn-outline-warning btn-lg"
                  to="/admin"
                >
                  Create Form Now
                </Link>
              </div>
            </Route>
            <Route path="/form/:formID">
              <FormComponent/>
            </Route>
            <Route path="/admin">
              <AdminComponent />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}
