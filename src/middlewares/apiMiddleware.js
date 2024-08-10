import axios from "axios";

const apiMiddleware = (store) => (next) => (action) => {
  const API_ERRORS = "errors/onApiError";

  if (action.type === API_ERRORS) {
    next(action);
    return Promise.reject(action.error);
  }

  /* Check if meta is present. Then treat this trigger as api call*/

  if (!(action.meta && action.meta.api)) {
    next(action);
    return Promise.resolve(
      `[API Middleware:] - action.type`,
      action.type,
      "Skip api call as meta prop is not present"
    );
  }

  let { method, url, data, headers, timeout, responseType } = action.meta.api;

  return new Promise((resolve, reject) => {
    const needsJSON = ["post", "put", "patch", "delete"].includes(method);

    let customHeaders = headers || {};
    if (method.toLowerCase() !== "get") {
      customHeaders["Content-Type"] =
        method.toLowerCase() === "patch"
          ? "application/json-patch+json"
          : needsJSON
          ? "application/json"
          : "";
    }

    if (sessionStorage.getItem("token")?.length > 0) {
      customHeaders["Authorization"] =
        "Bearer " + sessionStorage.getItem("token");
    }

    axios({
      method,
      url,
      data,
      timeout: timeout || 0,
      headers: customHeaders,
      responseType: responseType || "",
    })
      .then((response) => {
        action.response = response.data;
        action.responseObject = response;
        next(action);

        let value;

        if (action.resolve) {
          value = response.data;
        }
        if (responseType === "blob") {
          value = response;
        }
        return resolve(value);
      })
      .catch((error) => {
        // TO Do: Format error message here and then dispacth error action.
        action.error = error;
        action.response = {};

        var messages = [];
        if (error?.code === "ERR_NETWORK") {
          messages.push(
            "Network error: Something went worng please try again after sometime."
          );
        } else {
          messages = error?.response?.data;
        }
        next({
          type: API_ERRORS,
          error: messages,
          action,
        });
        return reject(error);
      });
  });
};

export default apiMiddleware;
