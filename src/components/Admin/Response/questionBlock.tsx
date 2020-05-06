import React, { useState, useEffect } from "react";

export default function QuestionBlock(props: any) {
  const [qTitle, setQTitle] = useState(props.stateArr.title);
  const [qDesc, setQDesc] = useState(props.stateArr.description);
  const [qRequired, setQRequired] = useState(props.stateArr.isRequired);
  const [qType, setQType] = useState(props.stateArr.type);
  const [qOptions, setQOptions] = useState(props.stateArr.options);
  const setQTypeHandler = (t: any) => {
    setQType(t.target.value);
  };
  useEffect(() => {
    props.stateArr[props.idx] = {
      title: qTitle,
      description: qDesc == "" ? " " : qDesc,
      type: qType,
      isRequired: qRequired,
      options: qOptions,
    };
    props.stateHandler(props.stateArr);
  }, [qTitle, qDesc, qType, qOptions]);

  return (
    <div className="form-row mb-3">
      <div className="form-group col-sm-6">
        <select
          className="form-control"
          required
          defaultValue={qType}
          onChange={setQTypeHandler}
        >
          <option disabled hidden>
            Question Type
          </option>
          <option value="ShortAns">Short Answer</option>
          <option value="LongAns">Long Answer</option>
          <option value="SingleChoice">Single Choice</option>
          <option value="MultipleChoice">Multiple Choice</option>
        </select>
      </div>
      <div className="form-group col-sm-6">
        <select
          className="form-control"
          required
          defaultValue={qRequired}
          onChange={(e) => setQRequired(e.target.value)}
        >
          <option value="false">Optional Question</option>
          <option value="true">Mandatory Question</option>
        </select>
      </div>
      <div className="form-group col-sm-12">
        <input
          className="form-control"
          value={qTitle}
          onChange={(e) => setQTitle(e.target.value)}
          placeholder="Question Title"
          required
        />
      </div>
      <div className="form-group col-12">
        <textarea
          className="form-control"
          value={qDesc}
          onChange={(e) => setQDesc(e.target.value)}
          placeholder="Question Description"
        />
      </div>
      <div
        className={
          "form-group col-12" +
          (qType == "SingleChoice" || qType == "MultipleChoice"
            ? " "
            : " d-none")
        }
      >
        <textarea
          className="form-control"
          value={qOptions}
          onChange={(e) => setQOptions(e.target.value)}
          placeholder="Options"
        />
        <small className="form-text text-muted text-left">
          New option in new line
        </small>
      </div>
      <div className="col-10 offset-1 border-bottom border-warning" />
    </div>
  );
}
