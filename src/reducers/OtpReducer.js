import { Generate_Otp } from "../actiontypes/ActionTypes";

const otpReducer = (state = {}, action) => {
  switch (action.type) {
    case Generate_Otp:
      return action.response;
    default:
      return state;
  }
};

export default otpReducer;