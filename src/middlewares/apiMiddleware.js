import axios from "axios";

const apiMiddleware = (store) => (next) => (action) => {
  const API_ERRORS = "errors/onApiError";
  let messages = [];

  if (action.type === API_ERRORS) {
    next(action);
    return Promise.reject(action.error);
  }

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
      validateStatus: function (status) {
        return status >= 200 && status < 500; // Allow 4xx errors to be resolved
      },
    })
      .then((response) => {
        if (response.status >= 400) {
          // Capture error message from response data
          const errorMessage =
            response.data?.message || "Something went wrong.";
          messages.push(errorMessage);

          next({
            type: API_ERRORS,
            error: messages,
            action,
          });
          return reject(new Error(errorMessage));
        }

        // Proceed with success response
        action.response = response.data;
        action.responseObject = response;
        next(action);
        return resolve(response.data);
      })
      .catch((error) => {
        // Handle network errors or any unexpected errors
        action.error = error;
        action.response = {};

        if (error?.code === "ERR_NETWORK") {
          messages.push(
            "Network error: Something went wrong, please try again later."
          );
        } else {
          // Handle non-network errors
          messages.push(
            error.response?.data?.message || "An unexpected error occurred."
          );
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
