import { Generate_Otp } from "../actiontypes/ActionTypes";
const generateOtp = (url, obj) => {
  return {
    type: Generate_Otp,
    meta: {
      api: {
        url: url,
        method: "post",
        data: obj,
      },
    },
  };
};

export default generateOtp;