import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";

import { createForm as CreateFormAPI } from "../../../graphql/mutations";

import QuestionBlock from "./questionBlock";

function AdminCreate() {
  type initialQueState = {
    title: string;
    description: string | null;
    type: string;
    isRequired: boolean;
    options: string[];
  };
  const [stateArr, setStateArr] = useState<initialQueState[]>([]);
  const [metadataTitle, setMetadataTitle] = useState("");
  const [metadataDesc, setMetadataDesc] = useState("");
  const [formState, setFormState] = useState<any>();
  const [questionArr, setQuestionArr] = useState<any[]>([]);
  const [responseArr, setResponseArr] = useState<any[]>([]);
  const [viewTab, setViewTab] = useState("resp");
  let { formID } = useParams();
  formID = atob(decodeURIComponent(formID));

  useEffect(() => {
    const getFormFields = async () => {
      try {
        const formData: any = await API.graphql({
          query:
            "query getForm($id: ID!) { getForm(id: $id) { questions { type description isRequired options title } responses(sortDirection: DESC){ items{ id createdAt answers{ answer question } } } meta { title description } owner } }",
          variables: { id: formID },
        });
        setFormState(formData.data.getForm);
        formData.data.getForm.questions.map(
          (que: initialQueState, index: number) => {
            stateArr.push({
              title: que.title,
              description: que.description,
              type: que.type,
              isRequired: que.isRequired,
              options: que.options,
            });
            questionArr.push(
              <QuestionBlock
                stateArr={stateArr}
                stateHandler={setStateArr}
                idx={index}
              />
            );
          }
        );
        setQuestionArr(questionArr);
        setStateArr(stateArr);
        formData.data.getForm.responses.items.map((res: any) => {
          let { id, createdAt, answers } = res;
          let date = new Date(createdAt);
          var csvObj = {} as any;
          csvObj["Timestamp"] = date;
          answers.forEach((ans: any) => {
            csvObj[ans.question] = ans.answer;
          });
          responseArr.push(csvObj);
        });
        responseArr.sort((a, b) => a["Timestamp"] - b["Timestamp"]);
        setResponseArr([...responseArr]);
      } catch (err) {
        console.log("Error fetching form: ", err);
      }
    };
    getFormFields();
  }, []);

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

  const handleSaveForm = async () => {
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
      await API.graphql(graphqlOperation(CreateFormAPI, { input: form }));
      alert("FormCreation: Success");
    } catch (err) {
      console.log(err);
      alert("FormCreation: Failed");
    }
  };
  let tableHeaders = new Set(" ");

  return (
    <>
      <h1 className="mt-5">Form Details</h1>
      <div className="container my-5 col-sm-12">
        <div className="row mb-5">
          <div className="col-sm-6 offset-sm-3">
            <div
              className={
                "col-12 border-warning py-1" +
                (viewTab == "resp" ? " border-bottom" : " pointer")
              }
              onClick={(e) => setViewTab("resp")}
            >
              Responses
            </div>
            <div
              className={
                "col-6 border-warning py-1 d-none" +
                (viewTab == "details" ? " border-bottom" : " pointer")
              }
              onClick={(e) => setViewTab("details")}
            >
              Edit Form
            </div>
          </div>
        </div>
        <div className="row">
          <div className={"col-sm-12" + (viewTab == "resp" ? "" : " d-none")}>
            <small className="table-responsive">
              <table className="table table-dark text-left table-striped table-bordered table-sm w-100">
                <tbody>
                  {responseArr.map(function (resp: any, index) {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        {Object.keys(resp).map(function (key) {
                          tableHeaders.add(key);
                          if (key == "Timestamp")
                            return (
                              <td>
                                {resp["Timestamp"]
                                  .toString()
                                  .replace(
                                    " GMT+0530 (India Standard Time)",
                                    ""
                                  )}
                              </td>
                            );
                          return <td>{resp[key]}</td>;
                        })}
                      </tr>
                    );
                  })}
                </tbody>
                <thead>
                  {Array.from(tableHeaders).map((header) => (
                    <th>{header}</th>
                  ))}
                </thead>
              </table>
            </small>
          </div>
          <div
            className={"col-sm-12" + (viewTab == "details" ? "" : " d-none")}
          >
            <form>
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
                    type="button"
                    onClick={handleSaveForm}
                  >
                    Save Form
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
