import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";

import { createForm as CreateFormAPI } from "../../../graphql/mutations";

import QuestionBlock from "./questionBlock";

function AdminCreate() {
  const initialQueState = {
    title: "",
    description: "",
    type: "ShortAns",
    isRequired: false,
    options: [],
  };
  const [stateArr, setStateArr] = useState([initialQueState]);
  const [metadataTitle, setMetadataTitle] = useState("");
  const [metadataDesc, setMetadataDesc] = useState("");
  const [questionArr, setQuestionArr] = useState([
    <QuestionBlock stateArr={stateArr} stateHandler={setStateArr} idx={0} />,
  ]);
  const handleAddQuestion = () => {
    let idx = stateArr.length;
    setQuestionArr([
      ...questionArr,
      <QuestionBlock
        stateArr={stateArr}
        stateHandler={setStateArr}
        idx={idx}
      />,
    ]);
  };
  const handleSaveForm = (event:any) => {
    event.preventDefault()
    createForm();
  };

  const createForm = async () => {    
    if (metadataTitle == "" || stateArr.length < 1 || stateArr[0].title == "")
      return;

    let form = {
      meta: {
        description: metadataDesc == "" ? " " : metadataDesc,
        title: metadataTitle,
      },
      questions: stateArr,
    };
    try {
      let response = await API.graphql(graphqlOperation(CreateFormAPI, { input: form }));
      // @ts-ignore
      prompt("Form created, following is the link","http://"+window.location.hostname+"/#/form/"+encodeURIComponent(btoa(response.data.createForm.id)));
    } catch (err) {
      console.log(err);
      alert("FormCreation: Failed");
    }
  };

  return (
    <>
      <h1 className="mt-5">Create Form</h1>
      <div className="container my-5 col-sm-6 offset-sm-3">
        <div className="row">
          <div className="col-sm-12">
            <form onSubmit={handleSaveForm}>
              <div className="form-row">
                <div className="form-group col-12">
                  <input
                    className="form-control"
                    placeholder="Form Title"
                    required
                    value={metadataTitle}
                    onChange={(e) => setMetadataTitle(e.target.value)}
                  />
                </div>
                <div className="form-group col-12">
                  <textarea
                    className="form-control"
                    placeholder="Form Description"
                    value={metadataDesc}
                    onChange={(e) => setMetadataDesc(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-12">
                  <h3>Questions</h3>
                </div>
              </div>
              {questionArr.map((e) => e)}
              <div className="form-row px-1">
                <div
                  className="form-group col-12 py-3 border rounded"
                  style={{ cursor: "pointer" }}
                  onClick={handleAddQuestion}
                >
                  <h3>Add Question</h3>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-12">
                  <button
                    className="btn btn-block btn-warning btn-lg"
                  >
                    Create Form
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminCreate;
