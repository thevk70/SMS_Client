import React from "react";
import "./Error.css";

const ErrorMsg = (props) => {
  return (
    <div className="wrapper-container">
      <div className="error-container">
        <div className="info-msg">
          <i className="fa fa-info-circle"></i>
          This is an info message.
        </div>

        <div className="success-msg">
          <i className="fa fa-check"></i>
          This is a success message.
        </div>

        <div className="warning-msg">
          <i className="fa fa-warning"></i>
          This is a warning message.
        </div>

        <div className="error-msg">
          <i className="fa fa-times-circle"></i>
          This is a error message.
        </div>
      </div>
    </div>
  );
};

export default ErrorMsg;
