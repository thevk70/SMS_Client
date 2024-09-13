import { createSlice } from "@reduxjs/toolkit";

export const ErrorSlice = createSlice({
  name: "errors",
  initialState: [],
  reducers: {
    onApiError: (state, action) => {
      if (action.type === "errors/onApiError") {
        return formatError(action.error);
      }
      return state;
    },
  },
});

function formatError(errorResponse) {
  if (Array.isArray(errorResponse)) {
    return errorResponse;
  } else if (Array.isArray(errorResponse?.errors?.Error)) {
    return errorResponse?.errors?.Error;
  } else {
    return [];
  }
}
export default ErrorSlice.reducer;
