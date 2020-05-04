import React from "react";
import { Link } from "react-router-dom";

function ListForms({
  title,
  description,
  id,
}: {
  title: string|undefined|null;
  description: string|undefined|null;
  id: string|undefined;
}) {
  return (
    <div className="row text-left mx-1 mb-2 py-1 border rounded">
      <div className="col-10">
        <p className="mb-0">
          <strong>{title}</strong>
          <br />
          <small className="font-italic">
            {description}&nbsp;
          </small>
        </p>
      </div>
      <div className="col-2 align-self-center">
        <Link to={`/admin/${encodeURIComponent(btoa(id!))}`} className="btn btn-info btn-block">
          View
        </Link>
      </div>
      {/* <div className="col-1 align-self-center">Delete</div> */}
    </div>
  );
}

export default ListForms;
