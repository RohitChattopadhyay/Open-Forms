import React, { useState, useEffect } from "react";

export default function AnswerBlock(props: any) {
  const [qAnswer, setQAnswer] = useState("");
  useEffect(
    () => {
      props.stateArr[props.idx] = {
        answer: qAnswer==""?" ":qAnswer,
        question: props.title
      }
      props.stateHandler(props.stateArr)
    },
    [qAnswer],
  );

  const getInputType = () => {
    const { type, options, title,isRequired } = props;
    let res;
    switch (type) {
      case "ShortAns":
        res = (
          <input
            className="form-control"
            required = {isRequired}
            value={qAnswer}
            onChange={(e) => setQAnswer(e.target.value)}
            placeholder="Answer goes here"
          />
        );
        break;
      case "LongAns":
        res = (
          <textarea
            className="form-control"
            required = {isRequired}
            value={qAnswer}
            onChange={(e) => setQAnswer(e.target.value)}
            placeholder="Answer goes here"
          />
        );
        break;
      case "MultipleChoice":
        if(options==undefined || options.length<1)
          return
        res = (
          <>
            <select multiple={true} required = {isRequired} className="form-control custom-select" onChange={(e)=>setQAnswer([...e.target.options].filter(o => o.selected).join(","))}>
              {options.map((option:string)=><option key={option}>{option}</option>)}
            </select>
          <small className="form-text text-muted">Hold shift and select multiple options.</small>
          </>
        )
        break;
      case "SingleChoice":
        if(options==undefined || options.length<1)
          return
        res = (
          <select className="form-control custom-select" required = {isRequired} onChange={(e)=>setQAnswer(e.target.value)}>
              {options.map((option:string)=><option key={option}>{option}</option>)}
          </select>
        )
        break;
    }
    return (
      <label className="w-100">
        {title}
        {res}
      </label>
    );
  };

  return (
    <div className="form-row mb-3">
      <div className="form-group col-12 text-left">{getInputType()}</div>
    </div>
  );
}
