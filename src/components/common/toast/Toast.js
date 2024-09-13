import React, { useEffect, useState } from "react";
import "./Toast.css";

const Toast = ({ visible, onClose, message, type, duration = 2000 }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (visible) {
      setProgress(100);

      const decrementValue = 100 / (duration / 100);

      const interval = setInterval(() => {
        setProgress((prev) => Math.max(prev - decrementValue, 0));
      }, 100);

      const timeout = setTimeout(() => {
        onClose();
      }, duration);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [visible, duration, onClose]);

  return (
    <div
      className={visible ? "wrapper-container" : "wrapper-container-disable"}
    >
      <div className={`toast-container ${type}-msg`}>
        <i
          className={`fa ${
            type === "error" ? "fa-times-circle" : "fa-info-circle"
          } logo`}
        ></i>
        {message}
        <div className="toast-progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default Toast;
