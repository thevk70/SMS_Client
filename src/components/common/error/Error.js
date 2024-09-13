import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Toast from "../toast/Toast";

const ErrorMsg = ({ type, message }) => {
  const [localErrorState, setLocalErrorState] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const [toastVisible, setToastVisible] = useState(true);
  const errors = useSelector((store) => store.error);

  useEffect(() => {
    setLocalErrorState(errors);
    if (errors && Array.isArray(errors) && errors.length > 0) {
      setIsVisible(true);
    }
  }, [errors]);

  const onCloseClickHandler = (value) => {
    setIsVisible(value);
  };

  const showToast = () => {
    setToastVisible(true); // Show the toast
  };

  const closeToast = () => {
    setToastVisible(false); // Hide the toast after the duration
  };
  return (
    <>
      {localErrorState &&
        Array.isArray(localErrorState) &&
        localErrorState.length > 0 &&
        localErrorState.map((item) => {
          return (
            <Toast
              visible={toastVisible}
              message={item}
              type="error"
              onCloseClick={() => onCloseClickHandler(false)}
              onClose={closeToast}
              duration={2000}
            />
          );
        })}
    </>
  );
};

export default ErrorMsg;
