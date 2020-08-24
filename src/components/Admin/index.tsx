import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Amplify from "aws-amplify";
import '@aws-amplify/ui/dist/style.css';
import config from "../../aws-exports";
import { withAuthenticator } from "aws-amplify-react";
import Auth from '@aws-amplify/auth';
import AdminDashboard from "./Dashboard";
import AdminCreate from "./Create";
import AdminResponse from "./Response";

Amplify.configure(config);

function AdminRouters() {
  let { path, url } = useRouteMatch();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
        <a className="navbar-brand logoFont" href="/">
          Open Forms
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <small>
                <a className="nav-link" href="/#/admin">
                  Dashboard
                </a>
              </small>
            </li>
            <li className="nav-item">
              <small>
                <a className="nav-link" href="/#/admin/create">
                  Create
                </a>
              </small>
            </li>
          </ul>
          <span className="navbar-text">
            <small>
              <a className="nav-link pointer" onClick={()=>Auth.signOut()}>Logout</a>
            </small>
          </span>
        </div>
      </nav>
      <Switch>
        <Route exact path={path}>
          <AdminDashboard />
        </Route>
        <Route path={`${path}/create`}>
          <AdminCreate />
        </Route>
        <Route path={`${path}/:formID`}>
          <AdminResponse />
        </Route>
      </Switch>
    </>
  );
}

export default withAuthenticator(AdminRouters);
