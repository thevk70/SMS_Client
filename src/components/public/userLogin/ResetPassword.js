import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../common/loading/Loading";
import { useNavigate } from "react-router-dom";
import generateOtp from "../../../actions/GenerateOtp";
import { getBaseUrl } from "../../../config/utility";
import "./ResetPassword.css";
import InputBox from "../../common/input/Input";
import {
  validateEmail,
  validatePassword,
} from "../../common/validation/Validation";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const [isSubmit, setIsubmit] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");
  const [otp, setOtp] = useState();
  const [isLoading, setIsloading] = useState(false);

  const otpResponse = useSelector((store) => store.otp);

  const resetPasswordHandler = () => {
    console.log(otpResponse.data.otpId);

    if (otpResponse !== undefined) {
      let obj = {
        email: userEmail,
        password: userPassword,
        confirmPassword: userConfirmPassword,
        otp: otp,
        otpId: otpResponse.data.otpId,
      };
      if (
        userEmail.length > 0 &&
        userPassword.length > 0 &&
        userConfirmPassword.length > 0
      ) {
        if (!validateEmail(userEmail)) {
          alert("Please enter a valid email address.");
          return;
        }

        if (!validatePassword(userPassword)) {
          alert(
            "Password must be at least 8 characters long and include uppercase letters, lowercase letters, digits, and special characters."
          );
          return;
        }

        if (userPassword !== userConfirmPassword) {
          alert("Passwords do not match.");
          return;
        }
        setIsloading(true);
        dispatch(generateOtp(getBaseUrl() + "user/resetPassword", obj))
          .then(() => {
            setIsloading(false);
            nevigate("/passwordResetSuccess");
          })
          .catch(setIsloading(false));
      } else {
        setIsubmit(true);
      }
    } else {
      alert("Generate OTP first.");
    }
  };

  return (
    <>
      {isLoading === true && <Loading />}
      <div className="resetPass-conatiner">
        <div className="resetPass-form-conatiner">
          <h1 className="resetPass-header">Reset Password</h1>
          <InputBox
            isSubmit={isSubmit}
            label="Enter Email"
            type="email"
            placeholder="Enter email"
            required={true}
            value={userEmail}
            onChange={setUserEmail}
          />

          {userEmail !== "" && (
            <section className="form-field">
              <div className="otp-container">
                <input
                  className="input-text width-50p"
                  type="texts"
                  name="OTP"
                  placeholder="Enter OTP"
                  required
                  value={otp}
                  onChange={(event) => setOtp(event.target.value)}
                />

                <button
                  className="otp-btn width-50p"
                  onClick={() => {
                    setIsloading(true);
                    dispatch(
                      generateOtp(getBaseUrl() + "otp/generateOTP", {
                        email: userEmail,
                      })
                    )
                      .then(() => setIsloading(false))
                      .catch(() => setIsloading(false));
                  }}
                >
                  Send OTP
                </button>
              </div>
            </section>
          )}

          <InputBox
            isSubmit={isSubmit}
            label="Enter New Password"
            type="password"
            placeholder="Enter new password"
            required={true}
            value={userPassword}
            onChange={setUserPassword}
          />

          <InputBox
            isSubmit={isSubmit}
            label="Confirm Password"
            type="password"
            placeholder="Enter password again"
            required={true}
            value={userConfirmPassword}
            onChange={setUserConfirmPassword}
          />

          <div className="btn-container-resetPass">
            <Link
              to="#"
              className="resetPass-btn-cta width-100p"
              onClick={resetPasswordHandler}
            >
              Reset
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
