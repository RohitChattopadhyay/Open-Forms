import React, { useState, useEffect } from "react";

import FormGist from "./formGist";
import { API, graphqlOperation } from "aws-amplify";
import { listForms as ListFormsAPI } from "../../../../graphql/queries";
import { ListFormsQuery } from "../../../../API";

function ListForms({ searchKey }: { searchKey: String }) {
  const [forms, setForms] = useState<ListFormsQuery>();
  const [loaderMsg, setLoaderMsg] = useState("Loading...")
  useEffect(() => {
    const getAllForms = async () => {
      try {
        const formsData: any = await API.graphql(
          graphqlOperation(ListFormsAPI)
        );
        setForms(formsData.data);
        setLoaderMsg("Your Created forms will be displayed here.")
      } catch (err) {
        alert("Error fetching forms: " + err.message);
      }
    };
    getAllForms();
  }, []);

  return (
    <>
      <hr />
      {forms?.listForms != undefined ? (
        forms?.listForms?.items?.map((e) => {
          if(e?.meta?.title?.toUpperCase().indexOf(searchKey.toUpperCase()) == -1)
            return ""
          return (
            <FormGist
              id={e?.id}
              description={e?.meta?.description}
              title={e?.meta?.title}
            />
          )
        })
      ) : (
        <span>{loaderMsg}</span>
      )}
    </>
  );
}

export default ListForms;
