import React, { useState, useEffect } from "react";
import {
  Link,
  useParams,
} from "react-router-dom";
import AnswerBlock from "./answerBlock";
import { API, graphqlOperation } from "aws-amplify";
import { createResponse as CreateResponseAPI } from "../../graphql/mutations"

function FormComponent() {
  type initialAnsState = {
    question: string;
    answer: string | null;
  };
  const [stateArr, setStateArr] = useState<initialAnsState[]>([]);
  const [answerArr, setAnswerArr] = useState<any[]>([]);
  const [formState, setFormState] = useState<any>();
  const [loaderMsg, setLoaderMsg] = useState("Loading...");
  const [loading, setLoading] = useState(true);

  let { formID } = useParams();
  formID = atob(decodeURIComponent(formID));

  useEffect(() => {
    const getFormFields = async () => {
      try {
        const formData: any = await API.graphql({
          query:
            "query getForm($id:ID!) { getForm(id: $id) { questions { type description isRequired options title } meta { title description } owner } }",
          variables: { id: formID },
          //@ts-ignore
          authMode: "AWS_IAM",
        });
        setFormState(formData.data.getForm);
        formData.data.getForm.questions
          .map((que: any, index: number) => {
            stateArr.push({
              question: que.title,
              answer: " ",
            });
            answerArr.push(
              <AnswerBlock
                title={que.title}
                description={que.description}
                isRequired={que.isRequired}
                type={que.type}
                stateArr={stateArr}
                stateHandler={setStateArr}
                options={que.options}
                idx={index}
              />
            );
          })          
          setAnswerArr(answerArr);
          setStateArr(stateArr);          
          setLoading(false)
      } catch (err) {
        setLoaderMsg("Error occured while fetching the form");
        console.log("Error fetching form: ", err);
      }
    };
    getFormFields();
  }, []);

  const handleSubmitForm = (event:any) => {
    event.preventDefault();
    saveResponse()    
  }

  const saveResponse = async () => {
    let response = {
      formID: formID,
      answers: stateArr,
    };
    try {
      await API.graphql(graphqlOperation(CreateResponseAPI, { input: response }));
      setLoading(true)
      setLoaderMsg("Thank you for filling the form")
    } catch (err) {
      console.log(err);
      alert("Form submission failed, try again")
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent w-100">
        <Link className="navbar-brand logoFont" to="/">
          Open Forms
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto"></ul>
          <span className="navbar-text">
            <small>
              <Link className="nav-link" to="/admin/create">Create survey now</Link>
            </small>
          </span>
        </div>
      </nav>
      {loading?<h3 className="my-auto">{loaderMsg}</h3>:""}
      <div className={"container my-5" + (loading==true?" d-none":"")}>
        <div className="row">
          <div className="col-12">
            <h1>{formState?.meta?.title}</h1>
            <p className="border-white border-bottom rounded pb-3">
              {formState?.meta?.description}
            </p>
          </div>
        </div>
        <div className={"row" + (loading==true?" d-none":"")}>
          <div className="col-sm-6 offset-sm-3">
            <form onSubmit={handleSubmitForm}>
              {answerArr == undefined ? "" : answerArr.map((e) => e)}
              <div className="form-row">
                <div className="form-group col-12">
                  <button
                    className="btn btn-block btn-warning btn-lg"                    
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-sm-8 offset-sm-2 text-muted">
            <small>
              Never submit passwords through Open Forms.
              <br/>
              This content is neither created nor endorsed by the maintainers
            </small>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormComponent;
