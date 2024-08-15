import React, { useState } from "react";
import "./Error.css";

const ErrorMsg = ({ type, message }) => {
  const [show, setShow] = useState(false);
  return (
    <div className={show ? "wrapper-container" : "wrapper-container-disable"}>
      <div className="error-container">
        <div className="info-msg">
          <i className="fa fa-info-circle logo"></i>
          This is an info message.
        </div>

        <div className="success-msg">
          <i className="fa fa-check logo"></i>
          This is a success message.
        </div>

        <div className="warning-msg">
          <i className="fa fa-warning logo"></i>
          This is a warning message.
        </div>

        <div className="error-msg">
          <i className="fa fa-times-circle logo"></i>
          This is a error message.
        </div>
        {/* 
        <div className="error-msg">
          <i className={iconClass}></i>
          <span className={messageClass}>{message}</span>
        </div> */}
      </div>
    </div>
  );
};

export default ErrorMsg;
