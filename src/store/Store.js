import { configureStore } from "@reduxjs/toolkit";
import apiMiddleware from "../middlewares/apiMiddleware";
import userReducer from "../reducers/UserReducers";
import otpReducer from "../reducers/OtpReducer";

export default configureStore({
  reducer: {
    user: userReducer,
    otp: otpReducer,
  },
  middleware: () => [apiMiddleware],
});
