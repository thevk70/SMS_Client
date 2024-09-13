import { configureStore } from "@reduxjs/toolkit";
import apiMiddleware from "../middlewares/apiMiddleware";
import userReducer from "../reducers/UserReducers";
import otpReducer from "../reducers/OtpReducer";
import ErrorSlice from "../reducers/ErrorSlice";
import userAuthReducer from "../reducers/UserAtuhReducer";

export default configureStore({
  reducer: {
    error: ErrorSlice,
    user: userReducer,
    otp: otpReducer,
    userAuth: userAuthReducer,
  },
  middleware: () => [apiMiddleware],
});
