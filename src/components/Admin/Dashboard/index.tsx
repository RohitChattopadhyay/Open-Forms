import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

import ListForms from "./ListForms";

function AdminDashboard() {
  let { url } = useRouteMatch();
  const [searchKey, setSearchKey] = useState("");
  return (
    <>
      <h1 className="my-5">Dashboard</h1>
      <div className="container my-5">
        <div className="row">
          <div className="col-sm-3 mb-1">
            <Link
              className="btn btn-outline-warning btn-block"
              to={`${url}/create`}
            >
              Create New Form
            </Link>
          </div>
          <div className="col-sm-9">
            <input
              className="form-control "
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
              placeholder="Type here to search"
            />
          </div>
          <div className="container">
            <ListForms searchKey={searchKey} />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
