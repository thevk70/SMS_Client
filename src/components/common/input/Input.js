import React from "react";
import { useState, useEffect } from "react";
import ErrorMsg from "../errormsg";
import "./Input.css";

const InputBox = (props) => {
  const [Error, setError] = useState(false);
  const [length, setLength] = useState(1);
  useEffect(() => {
    if (length === 1) setError(props.isSubmit);
  }, [props.isSubmit,length]);
  return (
    <>
      <section>
        <div className="form-label">{props.label}</div>
        <div
          className={
            props.direction === "row" ? "form-field-row" : "form-field"
          }
        >
          <input
            className={Error ? "input-text-invalid" : "input-text"}
            type={props.type ? props.type : "text"}
            placeholder={props.placeholder}
            value={props.value}
            onChange={(event) => {
              if (event.target.value.length <= 0 && props.required === true) {
                setLength(event.target.value.length);
                setError(true);
              } else {
                setLength(event.target.value.length);
                setError(false);
              }
              props.onChange(event.target.value);
            }}
            onKeyUp={props.onKeyUp}
            required={props.required}
          />
          <ErrorMsg
            value={props.value}
            valid={!Error}
            msg={"Please " + props.label + " "}
          />
        </div>
      </section>
    </>
  );
};

export default InputBox;
